const express=require('express');
const bodyparser=require('body-parser');
const cors = require('cors');
const {PORT, MONGO_URI} =require('./config/config')
const mongoose = require('mongoose');

const router = express.Router();
const server=express();
const app = require('http').Server(server);

server.use(cors());
server.use(bodyparser.urlencoded({extended:false}));
server.use(bodyparser.json());

mongoose.connect(MONGO_URI,{ useNewUrlParser: true })
.then(()=>app.listen(PORT,()=>{console.log('Server running at port '+PORT)}))
.catch((err) => {
    console.error(err)
    process.exit(1);
})

const userRouter = require('./router/userRouter')

server.use('/api',router);
router.use('/user',userRouter)