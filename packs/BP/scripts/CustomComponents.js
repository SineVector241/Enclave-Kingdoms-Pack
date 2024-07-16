import { world } from '@minecraft/server';
import { Tags } from './Faction/Tags';

world.beforeEvents.worldInitialize.subscribe((ev) => {
    ev.blockTypeRegistry.registerCustomComponent('enclave:kam_buff', {
        onTick: (ev) => {
            const players = ev.dimension.getPlayers({location: ev.block.location, maxDistance: 20, tags: [Tags.Kamereon] });
            for(const player of players)
            {
                player.addEffect("invisibility", 20*5, { amplifier: 1, showParticles: false });
            }
        }
    });
});