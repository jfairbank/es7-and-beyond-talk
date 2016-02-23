/* eslint no-console:0 */
import express from 'express';
import path from 'path';

const HOST = '127.0.0.1';
const PORT = 3000;

const app = express();

const orders = new Map([
  [1, { id: 1, customerId: 1, total: 5.23, respTime: 1000 }],
  [2, { id: 2, customerId: 2, total: 10.18, respTime: 6000 }],
  [3, { id: 3, customerId: 3, total: 42.99, respTime: 2000 }],
  [4, { id: 3, customerId: 3, total: 42.99, respTime: 3000 }],
  [5, { id: 3, customerId: 3, total: 42.99, respTime: 5000 }],
]);

app.get('/orderIds', (req, res) => {
  res.send([...orders.values()].map(({ id }) => id));
});

app.get('/orders', (req, res) => {
  res.send([...orders.values()]);
});

app.get('/orders/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const order = orders.get(id);

  if (!order) {
    res.sendStatus(404);
  } else if ('mockRequest' in req.query) {
    setTimeout(() => res.send(order), order.respTime);
  } else {
    res.send(order);
  }
});

app.use(express.static(
  path.join(__dirname, 'public')
));

export function run() {
  app.listen(PORT, HOST, () => {
    console.log(`Server listening at http://${HOST}:${PORT}`);
  });
}
