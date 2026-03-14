const Sentiment = require("sentiment");
const keywordExtractor = require("keyword-extractor");

const sentiment = new Sentiment();

exports.analyzeText = (text)=>{

const result = sentiment.analyze(text);

let emotion="neutral";

if(result.score>2) emotion="happy";
else if(result.score<-2) emotion="sad";

const keywords = keywordExtractor.extract(text,{
language:"english",
remove_digits:true,
return_changed_case:true,
remove_duplicates:true
});

return {emotion,keywords};

};