const express = require('express');
const mongoose = require('mongoose');
const agendamentosRouter = require('./routes/agendamentos');
const app = express();

// Conectar ao MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Conectado ao MongoDB Atlas'))
.catch(err => console.error('Erro ao conectar ao MongoDB', err));

// Middleware para entender JSON
app.use(express.json());

// Rotas
app.use('/api/agendamentos', agendamentosRouter);

// Iniciar o servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});