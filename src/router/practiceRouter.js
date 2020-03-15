const express = require('express')
const router = express.Router();

const PracticeController=require('../controller/practiceController');
// const authController = require('../middleware/auth');

// router.use(authController.verifyToken);

router.post('/create', async(req,res)=>{
    await PracticeController.newPractice(req,res)
});

router.get('/mypractices/:id', async(req,res)=>{
    await PracticeController.allMyPractices(req,res)
});

router.get('/:id', async(req,res)=>{
    await PracticeController.getPractice(req,res)
});

router.post('/save', async(req,res)=>{
    await PracticeController.savePractice(req,res)
});

router.delete('/delete/:id', async(req,res)=>{
    await PracticeController.deletePractice(req,res)
});

module.exports = router;