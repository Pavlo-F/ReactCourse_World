export default function dying(data) {
    const result = data.npc.map((animal) => {
        const resNpc = { ...animal };

        if (resNpc.food <= 0) {
            resNpc.helth -= 5;
        }

        return resNpc;
    });

    return result;
}
