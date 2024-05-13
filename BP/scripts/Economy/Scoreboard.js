import { world, ScoreboardObjective, Entity } from '@minecraft/server';

class EconomyScoreboard {
    static ScoreboardId = "Money";

    /**
     * @returns {ScoreboardObjective}
     */
    static GetOrCreateScoreboard() {
        const scoreboard = world.scoreboard.getObjective(this.ScoreboardId);
        if (!scoreboard) {
            return world.scoreboard.addObjective(this.ScoreboardId, this.ScoreboardId);
        }
        else {
            return scoreboard;
        }
    }

    /**
     * @argument {Entity} entity
     * @argument {Number} initialValue
     * @returns {Number}
     */
    static GetOrAddScore(entity, initialValue = 0) {
        const scoreboard = this.GetOrCreateScoreboard();
        try {
            const score = scoreboard.getScore(entity);
            return score;
        }
        catch
        {
            scoreboard.setScore(entity, initialValue);
        }
    }

    /**
     * @argument {Entity} entity
     * @argument {Number} amount
     */
    static AddScore(entity, amount) {
        const scoreboard = this.GetOrCreateScoreboard();
        scoreboard.addScore(entity, amount);
    }

    /**
     * @argument {Entity} entity
     * @argument {Number} amount
     */
    static ReduceScore(entity, amount) {
        const scoreboard = this.GetOrCreateScoreboard();
        const score = this.GetOrAddScore(entity, 0);
        scoreboard.setScore(entity, score - amount);
    }
}

export { EconomyScoreboard }