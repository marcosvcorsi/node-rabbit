import express from 'express';
import cors from 'cors';
import Publisher from './publisher';
import Consumer from './consumer';

const QUEUE = 'messages';

const app = express();

app.use(cors());
app.use(express.json());

app.post('/send', async (request, response) => {
  const { message } = request.body;

  const publisher = new Publisher(QUEUE);

  await publisher.send(message);

  return response.send();
})

new Consumer(QUEUE).consume();

app.listen(process.env.PORT || 3333, () => console.log('Server is running'))