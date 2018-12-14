import { mapStateToProps } from "../index";

const mappedProps = {
    stat: {
        animalsCountStat:
        {
            columnsHeight: 200,
            data:
                [
                    {
                        color: "green", count: 0, size: NaN, type: "herbivorous",
                    },
                    {
                        color: "red", count: 0, size: NaN, type: "predator",
                    },
                ],
        },
        animalsHelth: {
            columnsHeight: 300,
            data:
                [
                    {
                        color: "green", count: 0, size: NaN, type: "Rabbit",
                    },
                    {
                        color: "blue", count: 0, size: NaN, type: "Wolf",
                    },
                    {
                        color: "orange", count: 0, size: NaN, type: "Lion",
                    },
                ],
        },
        columnWidth: 70,
    },
};

const store = {
    dataBase: {
        raw: {
            npc: [],
        },
    },
};


describe("Chek statistics props", () => {
    const data = mapStateToProps(store);

    it("mapState", () => {
        expect(data).toEqual(mappedProps);
    });

    it("columnWidth > 0", () => {
        expect(data.stat.columnWidth).toBeGreaterThan(0);
    });

    it("stat animalsCountStat columnsHeight > 0", () => {
        expect(data.stat.animalsCountStat.columnsHeight).toBeGreaterThan(0);
    });

    it("stat animalsHelth columnsHeight > 0", () => {
        expect(data.stat.animalsHelth.columnsHeight).toBeGreaterThan(0);
    });

    it("stat animalsHelth data[0] have property \"count\"", () => {
        expect(data.stat.animalsHelth.data[0]).toHaveProperty("count");
    });

    it("stat animalsCountStat data length", () => {
        const dataCount = jest.fn(obj => obj.stat.animalsCountStat.data.length);
        dataCount(data);
        expect(dataCount).toHaveReturnedWith(2);
    });

});
