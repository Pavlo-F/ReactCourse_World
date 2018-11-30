export default function starvation(data) {
    const result = data.npc.map(point => (
        { ...point, food: point.food - 10 }
    ));

    return result;
}
