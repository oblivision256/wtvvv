const express = require("express");
const { EventEmitter } = require("events");

const app = express();
const events = new EventEmitter();
events.setMaxListeners(200);
const EVENT = "RemoteEvent";

app.use(express.json({ limit: '10mb' }));


app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST");
  res.header("Access-Control-Allow-Headers", "Content-Type, Username");
  next();
});


app.use((req, res, next) => {
  console.log(`Received ${req.method} request on ${req.url}`);
  next();
});

// Test route
app.get("/", (req, res) => {
  res.send("Server is alive!");
});


app.post("/executeRequest", (req, res) => {

  const { code, username } = req.body;

  if (!code || !username) {
    console.log("no username or code nigger");
    return res.sendStatus(400);
  }

  console.log(`Code received from ${username}: length ${code.length}`);
  events.emit(EVENT, { code, username });

  res.sendStatus(200);
});


 


app.get("/fetchExecuteRequests", (req, res) => {

  events.once(EVENT, ({ code, username }) => {

    res.json({ code, username });
  });
});


app.use((err, req, res, next) => {
  if (err.type === 'entity.too.large') {
    console.error('Payload too large error:', err.message);
    return res.status(413).send('Payload too large.');
  }
  next(err);
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});