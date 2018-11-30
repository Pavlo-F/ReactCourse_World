function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function movingAlg(array, width, height) {
    const result = array.map((point) => {
        const randomX = getRandomInRange(-1, 1);
        const randomY = getRandomInRange(-1, 1);

        const stepX = point.x + randomX;
        const stepY = point.y + randomY;

        let ressultX = point.x;
        let ressultY = point.y;

        if (stepX <= width && stepX > 0) {
            ressultX = stepX;
        }

        if (stepY <= height && stepY > 0) {
            ressultY = stepY;
        }

        return { ...point, x: ressultX, y: ressultY };
    });

    return result;
}
