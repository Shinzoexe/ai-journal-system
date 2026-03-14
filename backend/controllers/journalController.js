const Journal = require("../models/journal");
const { analyzeText } = require("../services/aiService");

exports.createJournal = async(req,res)=>{

try{

const {userId,text} = req.body;

const analysis = analyzeText(text);

const journal = new Journal({
userId,
text,
emotion:analysis.emotion,
keywords:analysis.keywords
});

await journal.save();

res.json(journal);

}catch(err){
res.status(500).json({error:err.message});
}

};

exports.getEntries = async(req,res)=>{

try{

const {userId} = req.params;

const entries = await Journal.find({userId});

res.json(entries);

}catch(err){
res.status(500).json({error:err.message});
}

};

exports.analyzeJournal = async(req,res)=>{

try{

const {text} = req.body;

const result = analyzeText(text);

res.json(result);

}catch(err){
res.status(500).json({error:err.message});
}

};

exports.getInsights = async(req,res)=>{

try{

const {userId} = req.params;

const entries = await Journal.find({userId});

let happy=0,sad=0,neutral=0;

entries.forEach(e=>{
if(e.emotion==="happy") happy++;
else if(e.emotion==="sad") sad++;
else neutral++;
});

res.json({happy,sad,neutral,total:entries.length});

}catch(err){
res.status(500).json({error:err.message});
}

};