const cors = require('cors');

const corsOptions = {
  origin: '*',
  methods: 'GET, HEAD, PUT, PATH, POST, DELETE',
  allowedHeaders: 'Content-Type, Authorization',
};

module.exports = cors(corsOptions)

