function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


export default function move(obj, worldMap) {
    const npc = { ...obj };
    const map = { ...worldMap };


    if (npc.type === "npc" && npc.resources.helth > 0) {
        const randomX = getRandomInRange(-1, 1);
        const randomY = getRandomInRange(-1, 1);

        const stepX = npc.cell.x + randomX;
        const stepY = npc.cell.y + randomY;


        npc.resources.food -= 10;


        if (npc.resources.food <= 0) {
            npc.resources.helth -= 5;
        }

        let nextCellObj = {};

        for (let k = 0; k < map.obj.length; k++) {
            if (map.obj[k].cell.x === stepX && map.obj[k].cell.y === stepY) {
                nextCellObj = map.obj[k];
                break;
            }
        }


        if (nextCellObj.resource === npc.food) {
            if (nextCellObj.type === "npc" && nextCellObj.resources.helth > 0) {
                nextCellObj.resources.helth = 0;
                npc.resources.food = 100;
            }

            if (nextCellObj.type === "location") {
                npc.resources.food = 100;
            }
        }


        if (stepX <= map.size.width && stepX > 0) {
            npc.cell.x = stepX;
        }

        if (stepY <= map.size.height && stepY > 0) {
            npc.cell.y = stepY;
        }
    }

    return npc;
}
