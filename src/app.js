import expres from "express"
import userRoutes from "./routes/user.routes.js";
import morgan from "morgan";

const app = expres();

app.use(expres.json());
app.use(morgan("tiny"));

app.use("/",userRoutes)

export default app;