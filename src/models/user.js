const {Schema,model}=require('mongoose');

const UserSchema=new Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    createdAt:{
        type:Date, 
        default:Date.now
    },
    
})

UserSchema.pre('save',next=>{
    let now=new Date();
    if(this.createdAt==null){
        this.createdAt=now;
    }
    next();
});

module.exports=model('User',UserSchema)