const {Schema,model}=require('mongoose');

const PracticeSchema=new Schema({
    userId:{
        type:String,
        require:true
    },
    currentLang:{
        type:String,
        require:true
    },
    wishLang:{
        type:String,
        require:true
    },
    questions:{
        type:Object,
        require:true
    },
    awnsers:{
        type:Object,
        require:true
    },
    score:{
        type:Number,
        default:0
    },
    status:{
        type:String,
        default:'Pronto'
    },    
},{
    timestamps: true,
    collection: 'practice'
})

module.exports=model('Practice',PracticeSchema)