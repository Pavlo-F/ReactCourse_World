import React, { PureComponent } from "react";
import Button from "./Button";
import WorldContainer from "./WorldContainer";

export default class App extends PureComponent {
    render() {
        return (
            <div className="app">
                <Button />

                <WorldContainer />
            </div>
        );
    }
}
