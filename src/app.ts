import express, { Application } from "express";
import cors from "cors";

//Application routs
import userRoute from "../src/app/moduls/user/user.route"

const app: Application = express();
app.use(cors());

//parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.get("/api/v1/user",userRoute);
app.use("/api/v1/user",userRoute);

export default app;

/***
 * interface -> user.interface.ts
 * schema & model -> user.schemaandmodel.ts
 *
 */
