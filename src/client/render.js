// React
import React from "react";

// React Dom Server
import { renderToString } from "react-dom/server";

// React Router Dom
import { StaticRouter } from "react-router-dom";

// Redux
import { Provider } from "react-redux";

// React bootstrap server side rendering
import { SSRProvider } from "react-bootstrap";

// Template
import { template } from "./template";

// Pages Routes
import PagesRoutes from "./PagesRoutes";


const render = (req, store, context, helmet) => {

    const content = renderToString(
        <SSRProvider>
            <Provider store={store}>
                <StaticRouter location={req.path} context={context}>
                    <PagesRoutes />
                </StaticRouter>
            </Provider>
        </SSRProvider>        
    );

    return template(content, store, helmet);
};

export default render;