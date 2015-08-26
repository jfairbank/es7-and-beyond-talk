import express from 'express';

const app = express();

const orders = new Map([
  [1, { id: 1, customerId: 1, total: 5.23 }],
  [2, { id: 2, customerId: 2, total: 10.18 }],
  [3, { id: 3, customerId: 3, total: 42.99 }]
]);

const customers = new Map([
  [1, { id: 1, name: 'Jeremy' }],
  [2, { id: 2, name: 'Emily' }],
  [3, { id: 3, name: 'Jet' }]
]);

function randomFail(req, res, next) {
  const fail = Math.random() > 0.9;

  if (fail) {
    res.status(500).send({ message: 'Could not retrieve data'});
  } else {
    next();
  }
}

// Uncomment for random 500 errors
//app.use(['/orders', '/orders/:id', '/customers/:id'], randomFail);

function getFromMap(map) {
  return (req, res) => {
    const id = parseInt(req.params.id, 10);
    const obj = map.get(id);

    if (obj) {
      res.send(obj);
    } else {
      res.sendStatus(404);
    }
  };
}

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


app.get('/orderIds', (req, res) => {
  res.send([1, 2, 3]);
});

app.get('/orders', (req, res) => {
  res.send(Array.from(orders.values()));
});

app.get('/orders/:id', getFromMap(orders));
app.get('/customers/:id', getFromMap(customers));

const HOST = '127.0.0.1';
const PORT = 3000;

const server = app.listen(PORT, HOST, () => {
  console.log(`Server listening at http://${HOST}:${PORT}`);
});
