import { world, system, EntityComponentTypes, ItemStack } from '@minecraft/server';
import { EconomyScoreboard } from './Scoreboard.js';

const CoinId = "enclave:coin";

world.afterEvents.entityDie.subscribe(ev => {
    if (ev.deadEntity.typeId === "minecraft:player") {
        var score = EconomyScoreboard.GetOrAddScore(ev.deadEntity);
        if (score >= 25) {
            EconomyScoreboard.ReduceScore(ev.deadEntity, 25);
            ev.deadEntity.dimension.spawnItem(new ItemStack(CoinId, 25), ev.deadEntity.location);
        }
    }
    else {
        try {
            var isPassive = !ev.deadEntity.getComponent(EntityComponentTypes.TypeFamily)?.hasTypeFamily("monster") ?? false;
            if (isPassive) return;

            ev.deadEntity.dimension.spawnItem(new ItemStack(CoinId, 1), ev.deadEntity.location);
        }
        catch { }
    }
});

world.afterEvents.playerSpawn.subscribe(ev => {
    if (ev.initialSpawn) {
        EconomyScoreboard.GetOrAddScore(ev.player);
    }
});

system.runInterval(() => {
    const players = world.getAllPlayers();
    for (let i = 0; i < players.length; i++) {
        const player = players[i];
        const container = player.getComponent(EntityComponentTypes.Inventory).container;

        for (let slot = 0; slot < container.size; slot++) {
            const item = container.getItem(slot);
            if (item && item.typeId === CoinId) {
                EconomyScoreboard.AddScore(player, item.amount);
                container.setItem(slot);
                player.sendMessage(`§g${item.amount} coins have been added!`);
            }
        }
    }
});