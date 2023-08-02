import express, { Application, Request, Response, NextFunction } from "express";

const app = express();
const port = 3001;

app.use((req: Request, res: Response, next: NextFunction): void => {
  console.log("Time: ", Date.now());
  next();
});

app.get("/", (req: Request, res: Response): void => {
  res.send("Hello World!");
});

app.listen(port, (): void => {
  console.log(`Example app listening on port ${port}!`);
});
