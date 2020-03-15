const express = require('express')
const router = express.Router();

const UserController=require('../controller/userController');
// const authController = require('../middleware/auth');



router.post('/register', async(req,res)=>{
    await UserController.register(req,res)
});

router.post('/login', async(req,res)=>{
    await UserController.sign(req,res)
});

// router.use(authController.verifyToken);

router.get('/all', async(req,res)=>{
    await UserController.getAll(req,res)
});

router.get('/:id', async(req,res)=>{
    await UserController.getUser(req,res)
});

router.put('/update/:id', async(req,res)=>{
    await UserController.updateUser(req,res)
});

router.delete('/delete/:id', async(req,res)=>{
    await UserController.deleteUser(req,res)
});

module.exports = router;