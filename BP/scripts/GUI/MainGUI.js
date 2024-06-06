import { world, system, Player } from '@minecraft/server';
import { ActionFormData } from '@minecraft/server-ui';
import { HomesGUI } from './HomesGUI.js';
import { ShopGUI } from './ShopGUI.js';
import { Vec3 } from "../vec3.js";

const spawn = new Vec3(84, 64, 104);
const Cooldown = 1000 * 60 * 5;//time between warps that must be waited

const UI = new ActionFormData()
    .title("Main")
    .button("Spawn")
    .button("Homes")
    .button("Shop");

const confirm = new ActionFormData()
  .title("§2Confirmation")
  .button("No", "textures/ui/cancel")
  .button("Yes", "textures/ui/check");

class MainGUI {
    /**
     * @argument {Player} player
     */
    static show(player) {
        UI.show(player).then(x => {
            if (x.canceled) return;

            switch (x.selection) {
                case 0://Spawn
                    const lastWarped = player.getDynamicProperty("enclave:lastWarpped") || 0;
                    const rightNow = new Date().getTime();
                    if (lastWarped + Cooldown < rightNow) {
                        confirm.show("Are you sure you want to warp to spawn?").then( (ev) =>{
                            if(ev.canceled)return;
                            if(ev.selection === 1) {
                                player.teleport(spawn, { dimension: world.getDimension("minecraft:overworld") });
                                player.setDynamicProperty("enclave:lastWarpped", rightNow);
                            }
                        });
                    }
                    else {
                        player.sendMessage(`§cYou must wait ${Math.floor((lastWarped + Cooldown - rightNow) / 1000)} seconds before warping again.`);
                    };
                    break;
                case 1://Homes
                    HomesGUI.show(player);
                    break;
                case 2://Shop
                    ShopGUI.show(player);
            }
        });
    }
}

world.beforeEvents.itemUse.subscribe(ev => {
    if (ev.itemStack.typeId == "minecraft:book" && ev.source.typeId == "minecraft:player") {
        const player = ev.source;
        system.run(() => MainGUI.show(player));
    };
});
