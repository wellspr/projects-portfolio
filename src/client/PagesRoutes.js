// React
import React from "react";

// React Router Dom
import { Switch } from "react-router-dom";

// React Router Config
import { renderRoutes } from "react-router-config";

// Routes Array
import { routes } from "../routes";

// Render routes
const PagesRoutes = () => <Switch>{ renderRoutes(routes) }</Switch>;

export default PagesRoutes;