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
            const userId=user[0].id

            const questions=await Words.aggregate([{$sample:{size:10}}])
            await Practice.create({
                    userId,
                    currentLang,
                    wishLang,
                    questions,

            }); 
            return res.status(200).send({ msg:'Teste criado!'}) 
        }catch(err) {
            return res.status(500).send(err.message);
        }
    };

    async updatePractice(req, res) {
        try {
            const { id } = req.params;
            const { user }  = req.body;
            if (!id) { return res.status(200).send('Não foi passado o Id do usuário'); }
            const userUpdated = await User.findOneAndUpdate({ "_id" : mongoose.Types.ObjectId(id)} , user);
            if(!userUpdated) { return res.status(200).send('Usuário não encontrado')};
            return res.status(200).send('Usuário atualizado com sucesso!');
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
            const all = await User.find(mongoose.Types.ObjectId(id)).lean();
            if (!all) { return res.status(200).send('Não existe Usuários cadastrados na base')};
            return res.status(200).send(all);
        }catch(err) {
            return res.status(500).send(err.message);
        }
    }
}

module.exports =  new PracticeController();