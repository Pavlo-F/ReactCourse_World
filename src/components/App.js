import React, { PureComponent } from "react";
import Button from "./Button";
import WorldContainer from "./WorldContainer";
import Statistics from "./Statistics";
import FilterLink from "./FilterLink";


export default class App extends PureComponent {
    render() {
        return (
            <div className="app">
                <FilterLink filter="DBView">
                    DataBase view
                </FilterLink>

                <Button />

                <WorldContainer />

                <Statistics />

            </div>
        );
    }
}
