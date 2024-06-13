import { world } from '@minecraft/server';

world.afterEvents.entitySpawn.subscribe(ev => {
    if (ev.entity.typeId == "minecraft:blaze") {
        ev.entity.remove();
    }
});

world.afterEvents.itemUseOn.subscribe(ev => {
    if(ev.source.typeId !== "minecraft:player") return;
    if(ev.itemStack.typeId === "enclave:scythe") {
        const evblock = ev.source.getBlockFromViewDirection({
            "maxDistance": 6
        }).block;
        if(!evblock) return;
        for(let x = -2; x <= 2; x++) {
            for(let z = -2; z <= 2; z++) {
                let block = evblock.offset({x,y:0,z});
                if(block.permutation.getState("strat:growth_stage") === 7) {
                    world.sendMessage(block.permutation.getState("strat:growth_stage").toString())
                    block.setPermutation(block.permutation.withState("strat:growth_stage", 0));
                    block.dimension.runCommand(`loot spawn ${evblock.x + x} ${evblock.y} ${evblock.z + z} loot "seeds/${block.typeId.split(":")[1]}"`)
                    block.dimension.runCommand(`function enclaveharvest`)
                }
            }
        }
    }
})
