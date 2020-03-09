const express = require('express')
const router = express.Router();

const WordsController=require('../controller/wordsController');

router.get('/', async(req,res)=>{
    await WordsController.allWords(req,res)
});



module.exports = router;