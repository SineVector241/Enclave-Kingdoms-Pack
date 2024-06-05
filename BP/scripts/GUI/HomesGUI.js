import { Player } from '@minecraft/server';
import { ActionFormData } from '@minecraft/server-ui';
import { HomeSystem, NumberOfHomes } from '../HomeSystem.js';

const Cooldown = 1000 * 60 * 5;//time between warps that must be waited

const ui = new ActionFormData()
    .title("Homes")
    .button("Warp Home")
    .button("Set Home")
    .button("Home Coordinates");

const confirm = new ActionFormData()
    .title("§2Confirmation")
    .button("No", "textures/ui/cancel")
    .button("Yes", "textures/ui/check");

const chooseHome = new ActionFormData()
    .title("§2Choose Home");
for(let i = ; I < NumberOfHomes; i++) {
    chooseHome.button(`Home ${i+1}`);
}

async function HomePicker(player) {
    return new Promise((res,rej)=>{
        chooseHome.show(player).then(ev => {
            if(ev.canceled) return res(0);
            return res(ev.selection+1);
        })
    })
}

class HomesGUI {
    /**
     * @argument {Player} player
     */
    static show(player) {
        ui.show(player).then(async function(ev) {
            if (ev.canceled) return;

            switch (ev.selection) {
                case 0://Warp Home
                    if (player.hasTag("inCombat")) {
                        player.sendMessage("§cCannot Warp Home While In Combat.");
                    } else {
                        let Home = 1;
                        if(NumberOfHomes > 1) {
                            Home = await HomePicker(player);
                            if(Home === 0) return;
                        } else if(NumberOfHomes === 0) {
                            player.sendMessage(`§cHomes aren't enabled in this level.`);
                            return;
                        }
                        if (!HomeSystem.hasHome(player, Home)) {
                            player.sendMessage(NumberOfHomes > 1 ? 
                                    `§cYou don't have Home ${Home} set yet.` :
                                    `§cYou don't have a home set yet.`
                                );
                            return;
                        }

                        const lastWarped = player.getDynamicProperty("enclave:lastWarpped") || 0;
                        const rightNow = new Date().getTime();

                        if (lastWarped + Cooldown < rightNow) {
                            //can warp again
                            confirm.body(NumberOfHomes > 1 ? 
                                `§aAre you sure you want to warp to Home ${Home}?` :
                                "§aAre you sure you want to warp home?"
                                )
                            confirm.show(player).then(resp => {
                                if (resp.canceled || resp.selection === 0) {
                                    player.sendMessage("§aCanceled warp.");
                                    return;
                                };

                                player.setDynamicProperty("enclave:lastWarpped", rightNow)
                                HomeSystem.warpHome(player, Home);
                            });
                        } else {
                            player.sendMessage(`§cYou must wait ${Math.floor((lastWarped + Cooldown - rightNow) / 1000)} seconds before warping again.`);
                        };
                        
                        
                    }
                    break;

                case 1://Set Home
                    let Home = 1;
                    if(NumberOfHomes > 1) {
                        Home = await HomePicker(player);
                        if(Home === 0) return;
                    } else if(NumberOfHomes === 0) {
                        player.sendMessage(`§cHomes aren't enabled in this level.`);
                        return;
                    }
                    confirm.body(NumberOfHomes > 1 ? 
                                `§aAre you sure you want to set Home ${Home}?` :
                                "§aAre you sure you want to set home?"
                            )
                    confirm.show(player).then(resp => {
                        if (resp.canceled || resp.selection === 0) {
                            player.sendMessage("§aCanceled set home.");
                            return;
                        };

                        HomeSystem.setHome(player, Home);
                        player.sendMessage(NumberOfHomes > 1 ?
                                    `§aHome ${Home} Set.` :
                                    `§aHome Point Set.`
                                );
                    });
                    break;

                case 2://Home Coordinates
                    let Home = 1;
                    if(NumberOfHomes > 1) {
                        Home = await HomePicker(player);
                        if(Home === 0) return;
                    } else if(NumberOfHomes === 0) {
                        player.sendMessage(`§cHomes aren't enabled in this level.`);
                        return;
                    }
                    const home = HomeSystem.getHomePosition(player, Home);
                    if (!home) {
                        player.sendMessage(`§cYou don't have a home set yet.`);
                        return true;
                    }
                    player.sendMessage(NumberOfHomes > 1 ? 
                        §aYour Home ${Home} is at §d${Math.round(home[1])}, §e${Math.round(home[2])}, §b${Math.round(home[3])} §ain ${home[0].replace("minecraft:", "")}` :
                        `§aYour home is at §d${Math.round(home[1])}, §e${Math.round(home[2])}, §b${Math.round(home[3])} §ain ${home[0].replace("minecraft:", "")}`);
                    break;
            }
        });
    }
}

export { HomesGUI }
