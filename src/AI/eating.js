export default function eating(data) {
    const result = data.npc.map((animal) => {
        if (animal.helth <= 0) {
            return animal;
        }

        const loc = data.locations.find(w => w.x === animal.x && w.y === animal.y);
        let resNpc = animal;

        if (loc) {
            if (loc.resource === animal.foodType) {
                resNpc = { ...animal, food: 100 };
            }
        }

        /*
        const herbivorous = data.npc.find(w => w.x === animal.x && w.y === animal.y && animal.type === "herbivorous");
        if (herbivorous && animal.type === "predator") {
            if (herbivorous.resource === animal.foodType) {
                resNpc = { ...animal, food: 100 };
            }
        }
*/
        return resNpc;
    });

    return result;
}
