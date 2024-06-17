import { world, system } from '@minecraft/server';

world.beforeEvents.itemUseOn.subscribe(ev => {
    if (ev.source.typeId !== "minecraft:player") return;
    if (["enclave:supremium_scythe", "enclave:imperium_scythe"].includes(ev.itemStack.typeId)) {
        if (ev.source.getItemCooldown("scythe_cooldown") !== 0) return;
        if (!ev.block) return;
        system.run(() => {
            ev.source.startItemCooldown("scythe_cooldown", 8);
            harvestArea(2, ev.block);
        });
    }
    if (["enclave:tertium_scythe", "enclave:prudentium_scythe", "enclave:inferium_scythe"].includes(ev.itemStack.typeId)) {
        if (ev.source.getItemCooldown("scythe_cooldown") !== 0) return;
        if (!ev.block) return;
        system.run(() => {
            ev.source.startItemCooldown("scythe_cooldown", 8);
            ev.itemStack.getComponent("minecraft:durability").damage += harvestArea(1,ev.block);
            ev.source.getComponent("inventory").container.setItem(ev.source.selectedSlotIndex, ev.itemStack);
        });
    }
})

function harvestArea(area, centerBlock) {
    let harvested = 0;
    for (let x = -area; x <= area; x++) {
        for (let z = -area; z <= area; z++) {
            let block = centerBlock.offset({ x, y: 0, z });
            if (block.permutation.getState("strat:growth_stage") === 7) {
                harvested++;
                block.setPermutation(block.permutation.withState("strat:growth_stage", 0));
                block.dimension.runCommand(`loot spawn ${centerBlock.x + x} ${centerBlock.y} ${centerBlock.z + z} loot "seeds/${block.typeId.split(":")[1]}"`)
            }
        }
    }
    return harvested;
}
