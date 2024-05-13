import { Player } from '@minecraft/server';
import { ActionFormData } from '@minecraft/server-ui';
import { Shop } from '../Economy/Shop.js';
import { ShopCategoryGUI } from './ShopCategoryGUI.js';

/** @type {Shop} */
const shop = new Shop();

class ShopGUI {
    static Name = "Shop"

    /**
     * @argument {Player} player
     */
    static show(player) {
        const ui = new ActionFormData()
            .title(this.Name);

        for (let i = 0; i < shop.Categories.length; i++) {
            ui.button(shop.Categories[i].Name);
        }
        ui.show(player).then(ev => {
            if (ev.canceled) return;
            ShopCategoryGUI.show(player, shop.Categories[ev.selection]);
        });
    }
}

export { ShopGUI }