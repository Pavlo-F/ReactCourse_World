import { HERBIVOROUS, PREDATOR } from "../consts/animalType";

function getAnimalsCount(data) {
    let lifeHerb = 0;
    let lifePred = 0;

    const columnsHeight = 200;
    const step = columnsHeight / data.length;

    data.forEach((item) => {
        switch (item.type) {
        case HERBIVOROUS: {
            if (item.helth > 0) {
                lifeHerb++;
            }
            break;
        }

        case PREDATOR: {
            if (item.helth > 0) {
                lifePred++;
            }
            break;
        }

        default:
        }
    });

    const herbSize = lifeHerb * step;
    const predSize = lifePred * step;

    return {
        columnsHeight,
        data: [
            {
                count: lifeHerb, color: "green", type: HERBIVOROUS, size: herbSize,
            },
            {
                count: lifePred, color: "red", type: PREDATOR, size: predSize,
            },
        ],
    };
}


function getAnimalsHelthByType(data) {
    let allRabbitHelth = 0;
    let allWolfHelth = 0;
    let allLionHelth = 0;

    data.forEach((item) => {
        switch (item.typeName) {
        case "Rabbit": {
            if (item.helth > 0) {
                allRabbitHelth += item.helth;
            }
            break;
        }

        case "Wolf": {
            if (item.helth > 0) {
                allWolfHelth += item.helth;
            }
            break;
        }

        case "Lion": {
            if (item.helth > 0) {
                allLionHelth += item.helth;
            }
            break;
        }

        default:
        }
    });

    const columnsHeight = 300;

    const step = columnsHeight / (allRabbitHelth + allWolfHelth + allLionHelth);

    const rabbitSize = allRabbitHelth * step;
    const wolfSize = allWolfHelth * step;
    const lionSize = allLionHelth * step;

    return {
        columnsHeight,
        data: [
            {
                count: allRabbitHelth, color: "green", type: "Rabbit", size: rabbitSize,
            },
            {
                count: allWolfHelth, color: "blue", type: "Wolf", size: wolfSize,
            },
            {
                count: allLionHelth, color: "orange", type: "Lion", size: lionSize,
            },
        ],
    };
}


export default function getStatistics(data) {
    const animalsCountStat = getAnimalsCount(data);
    const animalsHelth = getAnimalsHelthByType(data);

    return {
        columnWidth: 70,

        animalsCountStat,
        animalsHelth,
    };
}
