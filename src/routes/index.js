import App from "../client/App";
import Home from "../pages/Home";
import About from "../pages/About";
import NotFoundPage from "../pages/NotFoundPage";

export const routes = [
    {
        ...App,
        routes: [
            {
                path: "/",
                exact: true,
                ... Home
            },
            {
                path: "/about",
                exact: true,
                ... About
            },
            {
                ...NotFoundPage
            }
        ]
    }
];