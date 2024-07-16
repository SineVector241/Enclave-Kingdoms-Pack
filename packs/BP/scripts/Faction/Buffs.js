import { world, system, Player, MinecraftDimensionTypes } from '@minecraft/server';
import { Tags } from './Tags.js';

system.runInterval(() => {
    const players = world.getAllPlayers();
    for (let i = 0; i < players.length; i++) {
        const player = players[i];
        if (player.hasTag(Tags.Warrior)) {
            ApplyWarriorBuffs(player);
        }
        else if (player.hasTag(Tags.Legion)) {
            ApplyLegionBuffs(player);
        }
        else if (player.hasTag(Tags.Kamereon)) {
            ApplyKamereonBuffs(player);
        }
    }
});

/**
 * @param {Player} player
 */
function ApplyWarriorBuffs(player) {
    if (player.dimension.id == MinecraftDimensionTypes.nether) {
        player.addEffect("regeneration", 100, { amplifier: 0, showParticles: false });
        player.addEffect("strength", 100, { amplifier: 0, showParticles: false });
    }
    player.addEffect("fire_resistance", 100, { amplifier: 0, showParticles: false });
}

/**
 * @param {Player} player
 */
function ApplyLegionBuffs(player) {
    if (player.dimension.id == MinecraftDimensionTypes.overworld) {
        player.addEffect("resistance", 100, { amplifier: 0, showParticles: false });
    }
    if (player.isInWater) {
        player.addEffect("conduit_power", 100, { amplifier: 0, showParticles: false });
    }
}

/**
 * @param {Player} player
 */
function ApplyKamereonBuffs(player) {
    var timeOfDay = world.getTimeOfDay();
    if (player.dimension.id == MinecraftDimensionTypes.overworld && timeOfDay > 13000 && timeOfDay < 23000) {
        player.addEffect("speed", 100, { amplifier: 0, showParticles: false });
        player.addEffect("night_vision", 220, { amplifier: 0, showParticles: false });

        if (player.isSneaking) {
            player.addEffect("invisibility", 100, { amplifier: 0, showParticles: false });
        }
    }
}