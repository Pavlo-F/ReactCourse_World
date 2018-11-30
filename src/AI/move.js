function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function movingAlg(data) {



    const result = data.npc.map((point) => {
        const randomX = getRandomInRange(-1, 1);
        const randomY = getRandomInRange(-1, 1);

        const stepX = point.x + randomX;
        const stepY = point.y + randomY;

        let ressultX = point.x;
        let ressultY = point.y;

        if (stepX <= data.width && stepX > 0) {
            ressultX = stepX;
        }

        if (stepY <= data.height && stepY > 0) {
            ressultY = stepY;
        }

        return { ...point, x: ressultX, y: ressultY };
    });

    return result;
}
