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

class MainGUI {
    /**
     * @argument {Player} player
     */
    static show(player) {
        UI.show(player).then(x => {
            if (x.canceled) return;

            switch (x.selection) {
                case 0:
                    const lastWarped = player.getDynamicProperty("enclave:lastWarpped") || 0;
                    const rightNow = new Date().getTime();
                    if (lastWarped + Cooldown < rightNow) {
                        player.teleport(spawn, { dimension: world.getDimension("minecraft:overworld") });
                        player.setDynamicProperty("enclave:lastWarpped", rightNow)
                    }
                    else {
                        player.sendMessage(`§cYou must wait ${Math.floor((lastWarped + Cooldown - rightNow) / 1000)} seconds before warping again.`);
                    };
                    break;
                case 1:
                    HomesGUI.show(player);
                    break;
                case 2:
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