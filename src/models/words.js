const {Schema,model}=require('mongoose');

const WordsSchema=new Schema({
    pt:{
        type:String,
        require:true
    },
    en:{
        type:String,
        require:true
    },
    es:{
        type:String,
        require:true
    }
    
})

module.exports=model('Words',WordsSchema)