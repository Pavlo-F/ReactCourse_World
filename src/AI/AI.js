function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


export function move(x, y, width, height) {
    const randomX = getRandomInRange(-1, 1);
    const randomY = getRandomInRange(-1, 1);

    const stepX = x + randomX;
    const stepY = y + randomY;

    let ressultX = stepX;
    let ressultY = stepY;

    if (stepX <= width && stepX > 0) {
        ressultX = stepX;
    }

    if (stepY <= height && stepY > 0) {
        ressultY = stepY;
    }

    return { x: ressultX, y: ressultY };
}

export function eat(food) {
    let result = food - 10;

    if (result < 0) {
        result = 0;
    }

    return result;
}

export function chekHelth(helth) {
    let result = helth - 5;

    if (result < 0) {
        result = 0;
    }

    return result;
}



// export function move_old(obj, { map }) {
//     const npc = { ...obj };

//     if (npc.type === "npc" && npc.resources.helth > 0) {
//         const randomX = getRandomInRange(-1, 1);
//         const randomY = getRandomInRange(-1, 1);

//         const stepX = npc.cell.x + randomX;
//         const stepY = npc.cell.y + randomY;


//         npc.resources.food -= 10;


//         if (npc.resources.food <= 0) {
//             npc.resources.helth -= 5;
//         }

//         let nextCellObj = {};

//         for (let k = 0; k < map.obj.length; k++) {
//             if (map.obj[k].cell.x === stepX && map.obj[k].cell.y === stepY) {
//                 nextCellObj = map.obj[k];
//                 break;
//             }
//         }


//         if (nextCellObj.resource === npc.food) {
//             if (nextCellObj.type === "npc" && nextCellObj.resources.helth > 0) {
//                 nextCellObj.resources.helth = 0;
//                 npc.resources.food = 100;
//             }

//             if (nextCellObj.type === "location") {
//                 npc.resources.food = 100;
//             }
//         }


//         if (stepX <= map.size.width && stepX > 0) {
//             npc.cell.x = stepX;
//         }

//         if (stepY <= map.size.height && stepY > 0) {
//             npc.cell.y = stepY;
//         }
//     }

//     return npc;
// }
