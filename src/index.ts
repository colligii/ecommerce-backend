import express from "express";
import "dotenv/config";
import routes from "./routes";

const app = express();
const PORT = +(process.env.PORT || 3000);

app.use(express.json());
app.use('/api', routes)

app.listen(PORT, () => console.log('server started at port: ' + PORT))