// @ts-ignore
import express, { Express, Request, Response } from "express";
import stringController from "./controllers/products";

const app: Express = express();

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});

app.use(express.json());
app.use('/', stringController);


app.listen(3000,() => {
    console.log(`[server]: Server is running at http://localhost:3000`);
});