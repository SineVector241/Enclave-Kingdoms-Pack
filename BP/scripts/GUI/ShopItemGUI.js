import { Player, EntityComponentTypes, ItemStack } from '@minecraft/server';
import { ModalFormData, MessageFormData } from '@minecraft/server-ui';
import { ShopItem } from '../Economy/Shop.js';
import { EconomyScoreboard } from '../Economy/Scoreboard.js';

class ShopItemGUI {
    /**
     * @argument {Player} player
     * @argument {ShopItem} item
     */
    static show(player, item) {
        const ui = new ModalFormData()
            .title(`${item.Name} : \$${item.Cost}`)
            .slider("Amount", 1, 64, 1, 1);

        ui.show(player).then(ev => {
            if (ev.canceled) return;
            const [value] = ev.formValues;
            const confirmUI = new MessageFormData()
                .title("Confirm")
                .body(`Are you sure you want to buy ${value} ${item.Name}'s for \$${item.Cost * value}?`)
                .button2("Confirm")
                .button1("Deny");

            confirmUI.show(player).then(ev => {
                if (ev.canceled || ev.selection == 0) {
                    player.sendMessage("§aCanceled payment.");
                    return;
                }

                const sourceAmount = EconomyScoreboard.GetOrAddScore(player);
                if (sourceAmount < value * item.Cost) {
                    player.sendMessage("§cYou do not have the sufficient funds to make the purchase!");
                    return;
                }

                EconomyScoreboard.ReduceScore(player, value * item.Cost);
                player.getComponent(EntityComponentTypes.Inventory).container.addItem(new ItemStack(item.Identifier, value));
                player.sendMessage(`§aSuccessfully bought ${value} ${item.Name}'s for \$${item.Cost * value}.`);
            });
        });
    }
}

export { ShopItemGUI }