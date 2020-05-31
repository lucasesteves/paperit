const express = require('express')
const router = express.Router();

const PracticeController=require('../controller/practiceController');
// const authController = require('../middleware/auth');

// router.use(authController.verifyToken);

router.post('/create', PracticeController.newPractice);

router.get('/mypractices/:id', PracticeController.allMyPractices);

router.get('/:id', PracticeController.getPractice);

router.post('/save', PracticeController.savePractice);

router.delete('/delete/:id', PracticeController.deletePractice);

module.exports = router;