import express from 'express';

const app = express();

const orders = {
  1: { id: 1, cardId: 1, total: 5.23 },
  2: { id: 2, cardId: 2, total: 10.18 },
  3: { id: 3, cardId: 3, total: 42.99 }
};

//function randomSuccess(fn) {
//  return (req, res) => {
//    if (Math.random() <= 0.5) {
//      fn(req, res);
//    } else {
//      res.status(500).send({ success: false });
//    }
//  };
//}

app.get('/', (req, res) => {
  res.send(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title></title>
  </head>
  <body>
    Hello World
  </body>
  </html>
  `);
});

function randomBool() {
  return Math.random() <= 0.9;
}

app.get('/orderIds', (req, res) => {
  if (randomBool()) {
    res.send([1, 2, 3]);
  } else {
    res.status(500).send({ message: 'could not get ids' });
  }
});

app.get('/orderDetails/:id', (req, res) => {
  if (randomBool()) {
    res.send(orders[req.params.id]);
  } else {
    res.status(500).send({ message: 'could not get details' });
  }
});

app.post('/payOrder/:id', (req, res) => {
  const id = parseInt(req.params, 10);
  const success = id !== 2;
  res.send({ success });
});

app.listen(3000);
