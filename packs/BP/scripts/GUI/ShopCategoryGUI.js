import { Player } from '@minecraft/server';
import { ActionFormData } from '@minecraft/server-ui';
import { ShopCategory } from '../Economy/Shop.js';
import { ShopItemGUI } from './ShopItemGUI.js';

class ShopCategoryGUI {
    /**
     * @argument {Player} player
     * @argument {ShopCategory} category
     */
    static show(player, category) {
        const ui = new ActionFormData()
            .title(category.Name);

        for (let i = 0; i < category.Items.length; i++) {
            ui.button(`${category.Items[i].Name} - \$${category.Items[i].Cost}`, category.Items[i].Icon);
        }

        ui.show(player).then(ev => {
            if (ev.canceled) return;
            ShopItemGUI.show(player, category.Items[ev.selection]);
        });
    }
}

export { ShopCategoryGUI };