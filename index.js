const express = require("express");
const app = express();
app.use(express.json());
require('dotenv').config();
const port = process.env.PORT

const error404 = require('./middlewares/error404');
const morgan = require("./middlewares/morgan");
app.use(morgan(":method :host :status :param[id] - :response-time ms :body"));

const authorsRoutes = require("./routes/authors.routes");
const entriesRoutes = require("./routes/entries.routes");

app.get("/", (req, res) => {
  res.status(200).json({
    msg: "Ejercicio API rest SQL",
    routes: {
      authors: "/api/authors",
      entries: "/api/entries",
    },
  });
});

app.use('/api/authors', authorsRoutes);
app.use('/api/entries', entriesRoutes);

app.use('*', error404);

app.listen(port, () => {
    console.log(`>Listening on http://localhost:${port}`);
})
