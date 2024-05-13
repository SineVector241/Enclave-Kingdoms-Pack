import { world } from '@minecraft/server';
import { CommandSystem } from './CommandSystem.js';
import { EconomyScoreboard } from '../Economy/Scoreboard.js';

CommandSystem.RegisterCommand("transfer", (ev => {
    if (ev.amount < 0) {
        ev.source.sendMessage("§cYou cannot send negative amounts!");
        return;
    }

    const sourceAmount = EconomyScoreboard.GetOrAddScore(ev.source);
    if (sourceAmount < ev.amount) {
        ev.source.sendMessage("§cYou cannot transfer an amount higher than your balance!");
        return;
    }

    const players = world.getPlayers({ name: ev.playerName });
    if (players.length === 0) {
        ev.source.sendMessage(`§cCould not find a player with the name ${ev.playerName}!`);
        return;
    }

    EconomyScoreboard.ReduceScore(ev.source, ev.amount);

    const player = players[0];
    EconomyScoreboard.AddScore(player, ev.amount);

    ev.source.sendMessage(`§aSuccessfully sent \$${ev.amount} to ${player.name}.`);
    player.sendMessage(`§a${ev.source.name} has transferred \$${ev.amount} into your balance!`);
}),
    {
        playerName: "string",
        amount: "integer"
    });