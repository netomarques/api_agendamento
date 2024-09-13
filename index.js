const express = require('express');
const mongoose = require('mongoose');
const agendamentosRouter = require('./routes/agendamentos');
const app = express();

// Conectar ao MongoDB
mongoose.connect('mongodb+srv://admin:fee3gpEjh4jPFPK0@cluster0.0ld9lce.mongodb.net/bancoteste?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Conectado ao MongoDB'))
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