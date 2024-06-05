class Shop {
    constructor() {
        this.Categories = [
            new ShopCategory("Ores", [
                new ShopItem("Coal", "minecraft:coal", 8),
                new ShopItem("Block of Coal", "minecraft:coal_block", 72),
                new ShopItem("Iron", "minecraft:iron_ingot", 15),
                new ShopItem("Iron Block", "minecraft:iron_block", 135),
                new ShopItem("Gold", "minecraft:gold", 40),
                new ShopItem("Gold Block", "minecraft:gold_block", 360),
                new ShopItem("Diamond", "minecraft:diamond", 160),
                new ShopItem("Diamond Block", "minecraft:diamond_block", 1450),
                new ShopItem("Lapis Lazuli", "minecraft:lapis_lazuli", 8),
                new ShopItem("Lapis Lazuli Block", "minecraft:lapis_block", 70),
                new ShopItem("Emerald", "minecraft:emerald", 100),
                new ShopItem("Emerald Block", "minecraft:emerald_block", 900),
                new ShopItem("Nether Quartz", "minecraft:quartz", 10),
                new ShopItem("Redstone", "minecraft:redstone", 4),
                new ShopItem("Redstone Block", "minecraft:redstone_block", 36),
                new ShopItem("Glowstone", "minecraft:glowstone_dust", 4),
                new ShopItem("Glowstone Block", "minecraft:glowstone", 15)
            ]),

            new ShopCategory("Blocks", [
                new ShopItem("Dirt", "minecraft:dirt", 1),
                new ShopItem("Grass", "minecraft:grass_block", 4),
                new ShopItem("Cobblestone", "minecraft:cobblestone", 1),
                new ShopItem("Stone", "minecraft:stone", 2),
                new ShopItem("Gravel", "minecraft:gravel", 3),
                new ShopItem("Sand", "minecraft:sand", 1),
                new ShopItem("Snow", "minecraft:snow", 4),
                new ShopItem("Clay", "minecraft:clay", 12),
                new ShopItem("Ice", "minecraft:ice", 6),
                new ShopItem("Obsidian", "minecraft:obsidian", 12),
                new ShopItem("Endstone", "minecraft:end_stone", 20),
                new ShopItem("Netherrack", "minecraft:netherrack", 1),
                new ShopItem("Soul Sand", "minecraft:soul_sand", 4),
                new ShopItem("Mycelium", "minecraft:mycelium", 10),
                new ShopItem("Black Wool", "minecraft:black_wool", 6),
                new ShopItem("Blue Wool", "minecraft:blue_wool", 6),
                new ShopItem("Brown Wool", "minecraft:brown_wool", 6),
                new ShopItem("Cyan Wool", "minecraft:cyan_wool", 6),
                new ShopItem("Gray Wool", "minecraft:gray_wool", 6),
                new ShopItem("Green Wool", "minecraft:green_wool", 6),
                new ShopItem("Light_blue Wool", "minecraft:light_blue_wool", 6),
                new ShopItem("Light_gray Wool", "minecraft:light_gray_wool", 6),
                new ShopItem("Lime Wool", "minecraft:lime_wool", 6),
                new ShopItem("Magenta Wool", "minecraft:magenta_wool", 6),
                new ShopItem("Orange Wool", "minecraft:orange_wool", 6),
                new ShopItem("Pink Wool", "minecraft:pink_wool", 6),
                new ShopItem("Purple Wool", "minecraft:Purple_wool", 6),
                new ShopItem("Red Wool", "minecraft:red_wool", 6),
                new ShopItem("White Wool", "minecraft:white_wool", 6),
                new ShopItem("Yellow Wool", "minecraft:yellow_wool", 6)
            ]),

            new ShopCategory("Wood", [
                new ShopItem("Acacia Log", "minecraft:acacia_log", 8),
                new ShopItem("Birch Log", "minecraft:birch_log", 8),
                new ShopItem("Cherry Log", "minecraft:cherry_log", 8),
                new ShopItem("Dark Oak Log", "minecraft:dark_oak_log", 8),
                new ShopItem("Jungle Log", "minecraft:jungle_log", 8),
                new ShopItem("Mangrove Log", "minecraft:mangrove_log", 8),
                new ShopItem("Oak Log", "minecraft:oak_log", 8),
                new ShopItem("Spruce Log", "minecraft:spruce_log", 8),
                new ShopItem("Crimson Stem", "minecraft:crimson_stem", 12),
                new ShopItem("Warped Stem", "minecraft:warped_stem", 12),
                new ShopItem("Acacia Planks", "minecraft:acacia_planks", 2),
                new ShopItem("Birch Planks", "minecraft:_planks", 2),
                new ShopItem("Cherry Planks", "minecraft:_planks", 2),
                new ShopItem("Dark Oak Planks", "minecraft:_planks", 2),
                new ShopItem("Jungle Planks", "minecraft:_planks", 2),
                new ShopItem("Mangrove Planks", "minecraft:_planks", 2),
                new ShopItem("Oak Planks", "minecraft:_planks", 2),
                new ShopItem("Spruce Planks", "minecraft:_planks", 2),
                new ShopItem("Crimson Planks", "minecraft:_planks", 3),
                new ShopItem("Warped Planks", "minecraft:_planks", 3),
                new ShopItem("Bamboo Planks", "minecraft:bamboo_planks", 4),
                new ShopItem("Bamboo Block", "minecraft:bamboo_block", 8),
            ]),

            new ShopCategory("Food", [
                new ShopItem("Raw Chicken", "minecraft:chicken", 8),
                new ShopItem("Cooked Chicken", "minecraft:cooked_chicken", 9),
                new ShopItem("Raw Porkchop", "minecraft:porkchop", 12),
                new ShopItem("Cooked Porkchop", "minecraft:cooked_porkchop", 13),
                new ShopItem("Raw Beef", "minecraft:beef", 10),
                new ShopItem("Cooked Beef", "minecraft:cooked_beef", 11),
                new ShopItem("Raw Cod", "minecraft:cod", 10),
                new ShopItem("Cooked Cod", "minecraft:cooked_cod", 11),
                new ShopItem("Salmon", "minecraft:salmon", 10),
                new ShopItem("Cooked Salmon", "minecraft:cooked_salmon", 11),
                new ShopItem("Raw Potato", "minecraft:potato", 4),
                new ShopItem("Baked Potato", "minecraft:baked_potato", 5),
                new ShopItem("Poisonous Potato", "minecraft:poisonous_potato", 1),
                new ShopItem("Carrot", "minecraft:carrot", 4),
                new ShopItem("Apple", "minecraft:apple", 60),
                new ShopItem("Golden Apple", "minecraft:golden_apple", 400),
                new ShopItem("Melon", "minecraft:melon_slice", 2),
                new ShopItem("Glistering Melon", "minecraft:glistering_melon_slice", 40),
                new ShopItem("Mushroom Stew", "minecraft:mushroom_stew", 15),
                new ShopItem("Bread", "minecraft:bread", 5),
                new ShopItem("Cookie", "minecraft:cookie", 1),
                new ShopItem("Pumpkin Pie", "minecraft:pumpkin_pie", 15),
                new ShopItem("Cake", "minecraft:cake", 30),
                new ShopItem("Milk", "minecraft:milk_bucket", 45)
            ]),

            new ShopCategory("Drops", [
                new ShopItem("Flint", "minecraft:flint", 4),
                new ShopItem("Gunpowder", "minecraft:gunpowder", 10),
                new ShopItem("Golden Nugget", "minecraft:gol_nugget", 5),
                new ShopItem("Leather", "minecraft:leather", 20),
                new ShopItem("Feather", "minecraft:feather", 4),
                new ShopItem("Bone", "minecraft:bone", 6),
                new ShopItem("Bone Meal", "minecraft:bone_meal", 2),
                new ShopItem("String", "minecraft:string", 4),
                new ShopItem("Rotten Flesh", "minecraft:rotten_flesh", 1),
                new ShopItem("Spider Eye", "minecraft:spider_eye", 8),
                new ShopItem("Slimeball", "minecraft:slimeball", 25),
                new ShopItem("Ender Pearl", "minecraft:ender_pearl", 10),
                new ShopItem("Blaze Rod", "minecraft:blaze_rod", 50),
                new ShopItem("Blaze Powder", "minecraft:blaze_powder", 25),
                new ShopItem("Magma Cream", "minecraft:magma_cream", 50),
                new ShopItem("Ghast Tear", "minecraft:ghast_tear", 200)
            ]),

            new ShopCategory("Dyes", [
                new ShopItem("Black Dye", "minecraft:black_dye", 10),
                new ShopItem("Blue Dye", "minecraft:blue_dye", 8),
                new ShopItem("Brown Dye", "minecraft:brown_dye", 2),
                new ShopItem("Cyan Dye", "minecraft:cyan_dye", 6),
                new ShopItem("Gray Dye", "minecraft:gray_dye", 2),
                new ShopItem("Green Dye", "minecraft:green_dye", 4),
                new ShopItem("Light Blue Dye", "minecraft:light_blue_dye", 5),
                new ShopItem("Light Gray Dye", "minecraft:light_gray_dye", 5),
                new ShopItem("Lime Dye", "minecraft:lime_dye", 3),
                new ShopItem("Magenta Dye", "minecraft:magenta_dye", 4),
                new ShopItem("Orange Dye", "minecraft:orange_dye", 2),
                new ShopItem("Pink Dye", "minecraft:pink_dye", 2),
                new ShopItem("Purple Dye", "minecraft:purple_dye", 5),
                new ShopItem("Red Dye", "minecraft:red_dye", 2),
                new ShopItem("White Dye", "minecraft:white_dye", 2),
                new ShopItem("Yellow Dye", "minecraft:yellow_dye", 2)
            ]),

            new ShopCategory("Brewing", [
                new ShopItem("Brewing Stand", "minecraft:brewing_stand", 55),
                new ShopItem("Nether Wart", "minecraft:nether_wart", 4),
                new ShopItem("Glass Bottle", "minecraft:glass_bottle", 3),
            ]),

            new ShopCategory("Redstone", [
                new ShopItem("Redstone Torch", "minecraft:redstone_torch", 6),
                new ShopItem("Lever", "minecraft:lever", 2),

                new ShopItem("Acacia Button", "minecraft:acacia_button", 2),
                new ShopItem("Birch Button", "minecraft:birch_button", 2),
                new ShopItem("Cherry Button", "minecraft:cherry_button", 2),
                new ShopItem("Dark Oak Button", "minecraft:dark_oak_button", 2),
                new ShopItem("Jungle Button", "minecraft:jungle_button", 2),
                new ShopItem("Mangrove Button", "minecraft:mangrove_button", 2),
                new ShopItem("Spruce Button", "minecraft:spruce_button", 2),
                new ShopItem("Wooden Button", "minecraft:wooden_button", 2),
                new ShopItem("Crimson Button", "minecraft:crimson_button", 2),
                new ShopItem("Warped Button", "minecraft:warped_button", 2),
                new ShopItem("Bamboo Button", "minecraft:bamboo_button", 2),
                new ShopItem("Stone Button", "minecraft:stone_button", 2),
                new ShopItem("Polished Blackstone Button", "minecraft:polished_blackstone_button", 2),

                new ShopItem("Acacia Pressure Plate", "minecraft:acacia_pressure_plate", 4),
                new ShopItem("Birch Pressure Plate", "minecraft:birch_pressure_plate", 4),
                new ShopItem("Cherry Pressure Plate", "minecraft:cherry_pressure_plate", 4),
                new ShopItem("Dark Oak Pressure Plate", "minecraft:dark_oak_pressure_plate", 4),
                new ShopItem("Jungle Pressure Plate", "minecraft:jungle_pressure_plate", 4),
                new ShopItem("Mangrove Pressure Plate", "minecraft:mangrove_pressure_plate", 4),
                new ShopItem("Spruce Pressure Plate", "minecraft:spruce_pressure_plate", 4),
                new ShopItem("Wooden Pressure Plate", "minecraft:wooden_pressure_plate", 4),
                new ShopItem("Crimson Pressure Plate", "minecraft:crimson_pressure_plate", 4),
                new ShopItem("Warped Pressure Plate", "minecraft:warped_pressure_plate", 4),
                new ShopItem("Bamboo Pressure Plate", "minecraft:bamboo_pressure_plate", 4),
                new ShopItem("Stone Pressure Plate", "minecraft:stone_pressure_plate", 4),
                new ShopItem("Polished Blackstone Pressure Plate", "minecraft:polished_blackstone_pressure_plate", 4),
                new ShopItem("Light Weighted Pressure Plate", "minecraft:light_weighted_pressure_plate", 30),
                new ShopItem("Heavy Weighted Pressure Plate", "minecraft:heavy_weighted_pressure_plate", 80),

                new ShopItem("Piston", "minecraft:piston", 30),
                new ShopItem("Sticky Piston", "minecraft:sticky_piston", 55),
                new ShopItem("Tripwire Hook", "minecraft:tripwire_hook", 10),
                new ShopItem("Daylight Sensor", "minecraft:daylight_sensor", 50),
                new ShopItem("Redstone Lamp", "minecraft:redstone_lamp", 35),
                new ShopItem("Repeater", "minecraft:repeater", 25),
                new ShopItem("Redstone Comparator", "minecraft:comparator", 30),
                new ShopItem("Hopper", "minecraft:hopper", 100),
                new ShopItem("Dispenser", "minecraft:dispenser", 35),
                new ShopItem("Dropper", "minecraft:dropper", 15)
            ])
        ]
    }
}

class ShopCategory {
    /**
     * @argument {String} name
     * @argument {Array<ShopItem>} items
     */
    constructor(name, items = []) {
        /** @type {String} */
        this.Name = name;
        /** @type {Array<ShopItem>} */
        this.Items = items;
    }
}

class ShopItem {
    /**
     * @argument {String} name
     * @argument {String} identifier
     * @argument {Number} cost
     * @argument {String} icon
     */
    constructor(name, identifier, cost, icon = "") {
        /** @type {String} */
        this.Name = name;
        /** @type {String} */
        this.Identifier = identifier;
        /** @type {Number} */
        this.Cost = cost;
        /** @type {String} */
        this.Icon = icon;
    }
}

export { Shop, ShopCategory, ShopItem }