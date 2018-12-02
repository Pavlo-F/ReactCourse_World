function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function movingAlg(data) {
    const result = data.npc.map((animal) => {
        if (animal.helth <= 0) {
            return animal;
        }

        const randomX = getRandomInRange(-1, 1);
        const randomY = getRandomInRange(-1, 1);

        const stepX = animal.x + randomX;
        const stepY = animal.y + randomY;

        let ressultX = animal.x;
        let ressultY = animal.y;

        if (stepX <= data.width && stepX > 0) {
            ressultX = stepX;
        }

        if (stepY <= data.height && stepY > 0) {
            ressultY = stepY;
        }

        return { ...animal, x: ressultX, y: ressultY };
    });

    return result;
}
