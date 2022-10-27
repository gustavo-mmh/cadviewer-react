import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./home/index";
import Converter from "./converter/index";

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Home} path="/" exact />
            <Route component={Converter} path="/sobre" />
        </BrowserRouter>
    )
}

export default Routes;