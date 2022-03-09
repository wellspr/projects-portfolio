// Redux
import createServerStore from "../../redux/store/server";

// React Router Config
import { matchRoutes } from "react-router-config";

// Render function
import render from "../../client/render";

// Routes Array
import { routes } from "..";

// React Helmet
import { Helmet } from "react-helmet";

export const handler = async (req, res) => {

    const store = createServerStore(req);

    const helmet = Helmet.renderStatic();
    
    const branch = matchRoutes(routes, req.url);

    const promises = branch
        .map(({ route }) => {
            return route.loadData ? route.loadData(store) : null;
        })
        .map(promise => {
            if (promise) {
                return new Promise((resolve, reject) => {
                    promise.then(resolve).catch(resolve);
                });
            }
        });

    Promise.all(promises)
        .then(() => {
            const context = {};
            const content = render(req, store, context, helmet);

            if (context.notFound) res.status(404);
            
            res.send(content);
        });

};