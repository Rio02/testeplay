import express, { response } from 'express';
import cors from 'cors';
import rotas from './rotas';

const app = express();

app.use(cors());
app.use(express.json());
app.use(rotas);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Escutando porta ' + PORT);
})