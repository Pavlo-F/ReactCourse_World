export default function starvation(array) {
    const result = array.map(point => (
        { ...point, food: point.food - 10 }
    ));

    return result;
}
