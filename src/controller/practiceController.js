const Practice = require('../models/practice');
const User =require('../models/user');
const Words = require('../models/words');
const mongoose = require('mongoose');

class PracticeController {

    async getPractice(req, res) {
        try {
            const { id } = req.params;
            const pract = await User.find(mongoose.Types.ObjectId(id));
            if(!pract){ return res.status(200).send('Não existe esse teste!')};
            return res.status(200).send({user});
        }catch(err) {
            return res.status(500).send(err.message);
        }
    };

    async newPractice(req, res) {
        try {
            let { id } = req.body;
            const user = await User.find(mongoose.Types.ObjectId(id));
            const {currentLang,wishLang}=user[0]

            const questions=await Words.aggregate([{$sample:{size:10}},{$project:{_id:0}}])
            const obj={
                userId:id,
                currentLang:currentLang,
                wishLang:wishLang,
                questions:questions
            }
            return res.status(200).send({ obj })
        }catch(err) {
            return res.status(500).send(err.message);
        }
    };

    compareResult(questions, awnsers, wishLang) {
        let score = 0;
        for(let quest in questions) {
           if(questions[quest][wishLang] === awnsers[quest][wishLang]) {
              score++
           }
        }
        return score;
     }

    async savePractice(req, res) {
        try {

            const { userId, currentLang, wishLang, questions, awnsers }  = req.body;
            const score=this.compareResult(questions,awnsers, wishLang)
            await Practice.create({
                    userId,
                    currentLang,
                    wishLang,
                    questions,
                    awnsers,
                    score
            }); 
            return res.status(200).send({"retorno":score});
        }catch(err) {
            return res.status(500).send(err.message);
        }
    };

    async deletePractice(req, res) {
        try {
            const { id } = req.params;
            if (!id) { return res.status(200).send('Não foi passado o Id do exercício'); };
                const pract = await Practice.deleteOne({ '_id' : id });
                if(!pract) { return res.status(200).send('Exercício não encontrado')};
                return res.status(200).send('Excercício excluido com sucesso!');
        }catch(err) {
            return res.status(500).send(err.message);
        }
    };

    async allMyPractice(req, res) {
        try {
            const { id } = req.params;
            const all = await Practice.find({userId:id}).lean();
            if (!all) { return res.status(200).send('Não existe exercícios desse usuário')};
            return res.status(200).send(all);
        }catch(err) {
            return res.status(500).send(err.message);
        }
    }
}

module.exports =  new PracticeController();