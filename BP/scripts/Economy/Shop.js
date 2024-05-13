class Shop {
    constructor() {
        this.Categories = [
            new ShopCategory("Ores", [
                new ShopItem("Diamond", "minecraft:diamond", 50),
                new ShopItem("Iron", "minecraft:iron_ingot", 10)
            ]),

            new ShopCategory("Blocks", [
                new ShopItem("Bedrock", "minecraft:bedrock", 10000)
            ]),

            new ShopCategory("Wood", [

            ]),

            new ShopCategory("Dyes", [

            ]),

            new ShopCategory("Redstone", [

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