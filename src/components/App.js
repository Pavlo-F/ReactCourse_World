import React, { PureComponent } from "react";
import Button from "./Button";
import WorldContainer from "./WorldContainer";
import Statistics from "./Statistics";
import FilterLink from "./FilterLink";


export default class App extends PureComponent {
    render() {
        return (
            <div className="app">
                <div style={{ float: "left", height: "500px", paddingRight: "5px", marginTop: "4px" }}>
                    <FilterLink filter="DBView">
                        Данные в Json
                    </FilterLink>
                </div>

                <div style={{ display: "table" }}>
                    <Button />

                    <WorldContainer />

                    <Statistics />
                </div>

            </div>
        );
    }
}
