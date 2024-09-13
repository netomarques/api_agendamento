const express = require('express');
const router = express.Router();
const Agendamento = require('../models/Agendamento');

// Rota para criar um novo agendamento
router.post('/', async (req, res) => {
  const { nomeCliente, data, horario, servico } = req.body;

  const novoAgendamento = new Agendamento({
    nomeCliente,
    data,
    horario,
    servico
  });

  try {
    const agendamentoSalvo = await novoAgendamento.save();
    res.status(201).json(agendamentoSalvo);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar o agendamento' });
  }
});

// Rota para obter todos os agendamentos
router.get('/', async (req, res) => {
  try {
    const agendamentos = await Agendamento.find();
    res.json(agendamentos);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar agendamentos' });
  }
});

// Rota para obter um agendamento por ID
router.get('/:id', async (req, res) => {
  try {
    const agendamento = await Agendamento.findById(req.params.id);
    if (!agendamento) return res.status(404).json({ message: 'Agendamento não encontrado' });
    res.json(agendamento);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar o agendamento' });
  }
});

// Rota para atualizar um agendamento
router.put('/:id', async (req, res) => {
  const { nomeCliente, data, horario, servico } = req.body;

  try {
    const agendamentoAtualizado = await Agendamento.findByIdAndUpdate(req.params.id, {
      nomeCliente,
      data,
      horario,
      servico
    }, { new: true });

    if (!agendamentoAtualizado) return res.status(404).json({ message: 'Agendamento não encontrado' });

    res.json(agendamentoAtualizado);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar o agendamento' });
  }
});

// Rota para deletar um agendamento
router.delete('/:id', async (req, res) => {
  try {
    const agendamentoRemovido = await Agendamento.findByIdAndDelete(req.params.id);
    if (!agendamentoRemovido) return res.status(404).json({ message: 'Agendamento não encontrado' });
    res.json({ message: 'Agendamento removido com sucesso' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao remover o agendamento' });
  }
});

module.exports = router;