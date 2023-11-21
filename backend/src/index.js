const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routes/usuario.routes');
const rolRouter = require('./routes/rol.routes');
const cartRouter = require('./routes/cart.routes');
const productRouter = require('./routes/product.routes');
const corsConfig = require('./cors.config');
const app = express();

const PORT = 8080;

mongoose.connect('mongodb://localhost:27017/soccerarmor_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(corsConfig);

app.use(express.json());
app.use('/api/users', userRouter);
app.use('/api/rols', rolRouter);
app.use('/api/carts', cartRouter);
app.use('/api/products', productRouter);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
