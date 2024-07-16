import { Dimension, world } from '@minecraft/server';
import { Vec3 } from "./vec3.js";

const NumberOfHomes = 2;

class HomeSystem {
    static hasHome(/**@type Player */ player, home) {
        return (player.getDynamicProperty(`enclave:home${home === 1 ? "" : home}`) ? true : false);
    }
    static setHome(/**@type Player */ player, home) {
        this.setHomeAt(player, home, player.dimension, player.location);
    }
    static setHomeAt(/**@type Player */ player, home, /**@type Dimension */ dimension, /**@type Vec3 */ position) {
        try {
            player.setDynamicProperty(`enclave:home${home === 1 ? "" : home}`, JSON.stringify([dimension.id, position.x, position.y, position.z]));
        } catch (e) {
            console.warn("JSON stringification of home failed.")
            console.warn(e);
        }
    }
    static getHomePosition(/**@type Player */player, home) {
        let pos = player.getDynamicProperty(`enclave:home${home === 1 ? "" : home}`)
        if (pos) {
            try {
                pos = JSON.parse(pos);
            } catch (e) {
                let pos = null;
            }
        } else {
            pos = null;
        }

        return pos;
    }
    static warpHome(/**@type Player */ player, home) {
        home = this.getHomePosition(player,home);
        if (!home) return false;
        try {
            let dimension = home.shift();
            player.teleport(new Vec3(...home), {
                dimension: world.getDimension(dimension)
            });
            return true;
        } catch (e) {
            return false;
        }
    }
}

export { HomeSystem, NumberOfHomes }
