const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const client = require('prom-client');
const collectDefaultMetrics = client.collectDefaultMetrics;

// Enable collection of default metrics
collectDefaultMetrics();

// Expose /metrics endpoint
app.get('/metrics', async (req, res) => {
  res.set('Content-Type', client.register.contentType);
  res.end(await client.register.metrics());
});


const app = express();
app.use(cors());

const pool = new Pool({
  host: 'db',
  user: 'postgres',
  password: 'password',
  database: 'devopsdb'
});

app.get('/', async (req, res) => {
  const result = await pool.query('SELECT NOW()');
  res.send(`Hello from backend! Time: ${result.rows[0].now}`);
});

app.listen(5000, () => console.log('Backend listening on 5000'));
