import React, { Component } from "react";
import UserContainer from "./UserContainer";
import WorldEventContainer from "./WorldEventContainer";
import "./App.css";

export default class App extends Component {
    render() {
        return (
            <div className="app">
                <header className="App-header">
                    <h1 className="App-title">Мой мир</h1>
                </header>

                <UserContainer />
                <WorldEventContainer />

            </div>
        );
    }
}
