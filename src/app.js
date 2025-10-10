import expres from "express"
import router from "./src/routes/auth.routes.js";
import morgan from "morgan";

const app = expres();

app.use(expres.json());
app.use(morgan("tiny"));

app.use("/users",router)

export default app;