import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./store/reducer";

import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import { Navbar } from "./pages/navbar";
import Lord from "./pages/lord";
import Fellowship from "./pages/fellowship";



import "./styles.scss";

const store = createStore(reducer);

function Cap() {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/About" component={About} />
                <Route path="/Contact" component={Contact} />
                <Route path="/Lord" component={Lord} />
                <Route path="/Fellowship" component={Fellowship} />
            </Switch>
        </BrowserRouter>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Provider store={store}><Cap /> </Provider>, rootElement);
