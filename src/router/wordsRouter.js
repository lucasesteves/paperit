const express = require('express')
const router = express.Router();

const WordsController=require('../controller/wordsController');

router.get('/', async(req,res)=>{
    await WordsController.allWords(req,res)
});


router.post('/bank', async(req,res)=>{
    await WordsController.bank(req,res)
});



module.exports = router;