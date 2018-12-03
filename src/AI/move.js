function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function vision(allNpc, npc) {
    let randomX = getRandomInRange(-1, 1);
    let randomY = getRandomInRange(-1, 1);

    let stepX = npc.x + randomX;
    let stepY = npc.y + randomY;

    switch (npc.type) {
    case "herbivorous": {
        const predator = allNpc.find(w => w.x === stepX && w.y === stepY && w.type === "predator");
        if (predator) {
            randomX *= -1;
            randomY *= -1;
        }

        break;
    }

    default:
    }

    stepX = npc.x + randomX;
    stepY = npc.y + randomY;


    return { x: stepX, y: stepY };
}

export default function movingAlg(data) {
    const result = data.npc.map((animal) => {
        if (animal.helth <= 0) {
            return animal;
        }

        const { x: stepX, y: stepY } = vision(data.npc, animal);


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
