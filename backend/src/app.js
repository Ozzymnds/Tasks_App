import express from "express";
import cors from "cors";
import morgan from "morgan";

import router from "./routes/tabs";

import swaggerJSDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";
import { options } from "./swaggerOptions";

const app = express();
const specs = swaggerJSDoc(options);

app.set("port", 3000);

// app.use(cors({
//     origin: 'https://192.168.1.63:8081/tasks' // Reemplaza con la URL de tu aplicación de React Native
// }));

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(router);
app.use("/docs", swaggerUI.serve, swaggerUI.setup(specs));

export default app;