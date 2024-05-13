import { Player } from '@minecraft/server';
import { ActionFormData } from '@minecraft/server-ui';
import { HomeSystem } from '../HomeSystem.js';

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

class HomesGUI {
    /**
     * @argument {Player} player
     */
    static show(player) {
        ui.show(player).then(ev => {
            if (ev.canceled) return;

            switch (ev.selection) {
                case 0:
                    if (player.hasTag("inCombat")) {
                        player.sendMessage("§cCannot Warp Home While In Combat.");
                    } else {
                        if (!HomeSystem.hasHome(player)) {
                            player.sendMessage(`§cYou don't have a home set yet.`);
                            return;
                        }

                        const lastWarped = player.getDynamicProperty("enclave:lastWarpped") || 0;
                        const rightNow = new Date().getTime();

                        if (lastWarped + Cooldown < rightNow) {
                            //can warp again
                            confirm.body("§aAre you sure you want to warp home?")
                            confirm.show(player).then(resp => {
                                if (resp.canceled || resp.selection === 0) {
                                    player.sendMessage("§aCanceled warp.");
                                    return;
                                };

                                player.setDynamicProperty("enclave:lastWarpped", rightNow)
                                HomeSystem.warpHome(player);
                            });
                        } else {
                            player.sendMessage(`§cYou must wait ${Math.floor((lastWarped + Cooldown - rightNow) / 1000)} seconds before warping again.`);
                        };
                    }
                    break;

                case 1:
                    confirm.body("§aAre you sure you want to set home?")
                    confirm.show(player).then(resp => {
                        if (resp.canceled || resp.selection === 0) {
                            player.sendMessage("§aCanceled set home.");
                            return;
                        };

                        HomeSystem.setHome(player);
                        player.sendMessage(`§aHome Point Set.`);
                    });
                    break;

                case 2:
                    const home = HomeSystem.getHomePosition(player);
                    if (!home) {
                        player.sendMessage(`§cYou don't have a home set yet.`);
                        return true;
                    }
                    player.sendMessage(`§aYour home is at §d${Math.round(home[1])}, §e${Math.round(home[2])}, §b${Math.round(home[3])} §ain ${home[0].replace("minecraft:", "")}`);
                    break;
            }
        });
    }
}

export { HomesGUI }