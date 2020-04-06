require('dotenv').config();
const express=require('express');
const bodyparser=require('body-parser');
const cors = require('cors');
const {port, dbUrl} =require('./src/config/config')
const mongoose = require('mongoose');

const router = express.Router();
const server=express();
const app = require('http').Server(server);

server.use(cors());
server.use(bodyparser.urlencoded({extended:false}));
server.use(bodyparser.json());

mongoose.connect(dbUrl,{ useNewUrlParser: true })
.then(()=>app.listen(port,()=>{console.log('Server running at port '+port)}))
.catch((err) => {
    console.error(err)
    process.exit(1);
})

const userRouter = require('./src/router/userRouter')
const practiceRouter = require('./src/router/practiceRouter')
const wordsRouter = require('./src/router/wordsRouter')

server.use('/api',router);
router.use('/user',userRouter)
router.use('/practice',practiceRouter)
router.use('/words',wordsRouter)