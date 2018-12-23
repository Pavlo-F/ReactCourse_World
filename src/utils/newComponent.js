import { PREDATOR } from "../consts/animalType";
import { guid } from "./randomUtil";

function relativeCoords(event) {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;
    return { x, y };
}

export default function newComponent(e, objs) {
    // const rootComponent = document.getElementById("root");
    // const coords = { x: 5, y: 7 };
    // ReactDOM.render(<Location key="edmglfks" props={coords} store={e}/>, rootComponent);

    const coords = relativeCoords(e);
    const x = Math.trunc(coords.x / 50);
    const y = Math.trunc(coords.y / 50);
    const id = guid();
    const pred = objs.raw.npc.find(w => w.type === PREDATOR);

    objs.spawnShape(objs.raw, {
        ...pred, x, y, helth: 100, food: 100, id,
    });
}
