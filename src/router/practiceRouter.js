const express = require('express')
const router = express.Router();

const PracticeController=require('../controller/practiceController');

router.post('/create', async(req,res)=>{
    await PracticeController.newPractice(req,res)
});

router.get('/mypractices/:id', async(req,res)=>{
    await PracticeController.allMyPractices(req,res)
});

router.get('/:id', async(req,res)=>{
    await PracticeController.getPractice(req,res)
});

router.put('/update/:id', async(req,res)=>{
    await PracticeController.updatePractice(req,res)
});

router.delete('/delete/:id', async(req,res)=>{
    await PracticeController.deletePractice(req,res)
});

module.exports = router;