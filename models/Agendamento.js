const mongoose = require('mongoose');

const AgendamentoSchema = new mongoose.Schema({
  nomeCliente: {
    type: String,
    required: true
  },
  data: {
    type: String,
    required: true
  },
  horario: {
    type: String,
    required: true
  },
  servico: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Agendamento', AgendamentoSchema);