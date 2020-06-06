const express = require('express')
const router = express.Router();

const PracticeController=require('../controller/practiceController');
const practice=new PracticeController()
// const authController = require('../middleware/auth');

// router.use(authController.verifyToken);

router.post('/create', PracticeController.newPractice);

router.get('/mypractices/:id', PracticeController.allMyPractices);

router.get('/:id', PracticeController.getPractice);

router.post('/save', (req,res)=>practice.savePractice(req,res));

router.delete('/delete/:id', PracticeController.deletePractice);

module.exports = router;