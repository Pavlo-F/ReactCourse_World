import { mapStateToProps } from "../index";
import mappedProps from "./mappedProps";

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
