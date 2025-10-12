import expres from "express"
import morgan from "morgan";
import authrouter from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";

const app = expres();

app.use(expres.json());
app.use(morgan("tiny"));

app.use("/", authrouter)
app.use("/", userRoutes);

export  {app} ;