const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const client = require('prom-client');

const app = express();
app.use(cors());

// Enable collection of default metrics
const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics();

// PostgreSQL connection
const pool = new Pool({
  host: 'db', // service name from docker-compose.yml
  user: 'postgres',
  password: 'password',
  database: 'devopsdb'
});

// Routes
app.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.send(`Hello from backend! Time: ${result.rows[0].now}`);
  } catch (err) {
    res.status(500).send('Database error: ' + err.message);
  }
});

app.get('/metrics', async (req, res) => {
  res.set('Content-Type', client.register.contentType);
  res.end(await client.register.metrics());
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend listening on port ${PORT}`);
});
