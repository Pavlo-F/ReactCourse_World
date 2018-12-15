import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Statistics from "../Statistics";
import mappedProps from "./mappedProps";

configure({ adapter: new Adapter() });

describe("Chek render <Statistics />", () => {
    it("renders 2 <svg> tags", () => {
        const wrapper = shallow(<Statistics {...mappedProps}/>);
        expect(wrapper.find("svg").length).toBe(2);
    });
});
