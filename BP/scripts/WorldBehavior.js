import { world } from '@minecraft/server';

world.afterEvents.entitySpawn.subscribe(ev => {
    if (ev.entity.typeId == "minecraft:blaze") {
        ev.entity.remove();
    }
});