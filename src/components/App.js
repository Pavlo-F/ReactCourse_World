import React, { PureComponent } from "react";

import UserContainer from "./UserContainer";
import WorldEventContainer from "./WorldEventContainer";
import WorldContainer from "./WorldContainer";
import "./App.css";

export default class App extends PureComponent {
    render() {
        return (
            <div className="app">
                <header className="App-header">
                    <h1 className="App-title">Мой мир</h1>
                </header>

                <UserContainer />
                <WorldEventContainer />
                <WorldContainer />

            </div>
        );
    }
}
