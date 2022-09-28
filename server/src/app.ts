import express, { Application, Request, Response, NextFunction } from 'express';

const app: Application = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.post('/api/', (req: Request, res: Response) => {
    res.send("Esta é uma " + req.body.title + " a mensagem é: " + req.body.messageBody);
});

app.listen(5000, () => console.log('Server running'));