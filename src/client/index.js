// React
import React from "react";
import ReactDom from "react-dom";

// React Router
import { BrowserRouter } from "react-router-dom";

// Redux
import { Provider } from "react-redux";
import createClientStore from "../redux/store/client";

// React bootstrap server side rendering
import { SSRProvider } from "react-bootstrap";

// Pages Routes
import PagesRoutes from "./PagesRoutes";

const initialState = window.INITIAL_STATE;

const store = createClientStore(initialState);

ReactDom.hydrate(
    <SSRProvider>
        <BrowserRouter>
            <Provider store={store}>
                <PagesRoutes />
            </Provider>
        </BrowserRouter>
    </SSRProvider>, 
    document.getElementById("root")
);