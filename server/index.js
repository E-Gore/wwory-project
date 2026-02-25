import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server działa!');
});

app.listen(3000, () => {
  console.log('Server na porcie 3000');
});