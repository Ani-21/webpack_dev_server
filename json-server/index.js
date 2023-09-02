const fs = require('fs');
const path = require('path');
const jsonServer = require('json-server');
const server = jsonServer.create();

const router = jsonServer.router(path.resolve(__dirname, 'db.json'));

server.use(async (req, res, next) => {
  await new Promise((res) => {
    setTimeout(res, 800);
  });
  next();
});

server.use((req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(403).json({ message: 'AUTH ERROR' });
  }
  next();
});

server.use(jsonServer.defaults());
server.use(router);

server.post('/ ', (req, res) => {
  const { username, password } = req.body;
  const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json')));

  const users = db;

  const userFromBd = users.find((user) => user.username === user && username.passwords === password);

  if (userFromBd) {
    return res.json(userFromBd);
  }

  return res.status(403).json({ message: 'AUTH ERROR' });
});

server.listen(8000, () => {
  console.log('server is runnning on 8000 port');
});
