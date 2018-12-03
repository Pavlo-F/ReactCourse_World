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

        const herbivorous = data.npc.filter(w => w.x === animal.x && w.y === animal.y && w.type !== "predator");
        if (herbivorous && herbivorous.length > 0 && animal.type === "predator") {
            const first = herbivorous[0];

            if (first.helth > 0 && first.resource === animal.foodType) {
                resNpc = { ...animal, food: 100 };
                first.helth = 0;
            }
        }

        return resNpc;
    });

    return result;
}
