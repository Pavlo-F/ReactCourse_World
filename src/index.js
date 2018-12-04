import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import { store } from "./store/configureStore";
import App from "./components/App";
import DBView from "./components/DBView";

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Route path="/" exact component={App} />
                <Route path="/DBView/" component={DBView} />
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById("root"),
);
