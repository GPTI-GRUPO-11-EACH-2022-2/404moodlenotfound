import express, { Application, Request, Response, NextFunction } from 'express';

const port = process.env.PORT || 5000
const app: Application = express();

app.listen(port, () => console.log('Server running on port: ', port));

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.post('/api/', (req: Request, res: Response) => {
    res.send("Esta é uma " + req.body.title + " a mensagem é: " + req.body.messageBody);
});