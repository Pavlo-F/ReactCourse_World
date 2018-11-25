import React, { PureComponent } from "react";

import User from "./User";
import WorldEvent from "./WorldEvent";
import World from "./World";
import "./App.css";

export default class App extends PureComponent {
    render() {
        return (
            <div className="app">
                <header className="App-header">
                    <h1 className="App-title">Мой мир</h1>
                </header>

                <User />
                <WorldEvent />
                <World />

            </div>
        );
    }
}
