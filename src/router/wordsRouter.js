const express = require('express')
const router = express.Router();

const WordsController=require('../controller/wordsController');

router.get('/', WordsController.allWords);

router.post('/bank', WordsController.bank);

module.exports = router;