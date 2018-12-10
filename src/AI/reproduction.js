import random from "../utils/randomUtil";

export default function reproduction(data) {
    const result = [...data.npc];

    data.npc.forEach((animal) => {
        if (animal.helth > 0) {
            const npc = data.npc.find(w => w.x === animal.x
                && w.y === animal.y
                && w.typeName === animal.typeName
                && w.helth > 0
                && w.id !== animal.id);

            if (npc) {
                const isReproduction = random(1, 10) >= 8;

                if (isReproduction) {
                    result.push({
                        ...animal, color: "#e600e6", helth: 100, food: 50,
                    });
                }
            }
        }
    });

    return result;
}
