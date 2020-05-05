const express = require('express');
const dotenv = require('dotenv');

dotenv.config({ path: './config/config.env' });

const app = express();

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`🔥Server running on port ${PORT}🔥`));
