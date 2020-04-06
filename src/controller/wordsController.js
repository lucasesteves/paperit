const Words = require('../models/words');
const mongoose = require('mongoose');

class WordsController {

    async allWords(req, res) {
        try {
            const all = await Words.find().lean();
            return res.status(200).send(all);
        }catch(err) {
            return res.status(500).send(err.message);
        }
    }

    async bank(req, res) {
        try {            
            const all = await Words.aggregate([{$project:obj}]).lean();
            return res.status(200).send(all);
        }catch(err) {
            return res.status(500).send(err.message);
        }
    }
}

module.exports =  new WordsController();