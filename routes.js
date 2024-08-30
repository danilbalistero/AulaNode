const express = require('express');
const EnderecoController = require('./controllers/EnderecoController'); 

const router = express.Router();

router.post('/enderecos', EnderecoController.createEndereco);
router.get('/enderecos', EnderecoController.getAllEnderecos);
router.get('/enderecos/:id', EnderecoController.getEnderecoById); 
router.put('/enderecos/:id', EnderecoController.updateEndereco); 
router.delete('/enderecos/:id', EnderecoController.deleteEndereco); 
router.post('/enderecos/:cep', EnderecoController.createEnderecoCep);


module.exports = router;
