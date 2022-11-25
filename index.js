const express = require('express');
const app = express();
const cors = require('cors');

const port = process.env.port || 3000;

app.use(express.json());
app.use(cors());

const router = require('./routes/router.js');
app.use('/api', router);

app.listen(port, () => console.log(`Ejecutando en el puerto ${port}`));