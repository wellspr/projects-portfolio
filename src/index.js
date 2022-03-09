import "@babel/polyfill";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
// import proxy from "express-http-proxy";
import compression from "compression";

// import helmet from "helmet"; // Helmet
import { handler } from "./routes/handler";

// config
import {corsConfig} from "./config";

// Middleware
// import {} from "./middlewares/uploadFiles";

const app = express();

// Middlewares
app.use(express.static("public"));
app.use(cors(corsConfig));
app.use(express.json());
app.use(cookieParser());
app.use(compression());

// Helmet (https://www.npmjs.com/package/helmet)
// app.use(helmet());

app.get("*", handler);

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});