import express, { Express, Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import productsController from "./controllers/products";
import productListController from "./controllers/productlist";
//import parcelmachines from "./controllers/parcelmachines";

const app: Express = express();

app.use(cors({
    origin: ['http://localhost:3006']
}));

app.use(bodyParser.json());

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});

app.use('/', productsController);
app.use('/', productListController);
//app.use('/', parcelmachines);

app.listen(4444,() => {
    console.log(`[server]: Server is running at http://localhost:4444`);
});