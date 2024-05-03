const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
    title: { type: String, required:true},
    content: {type: String, required:true},
    author: { 
        
        type: String,
        required: true
    },
    image: { type: String, required:true}
});

const Article = mongoose.model('Article', ArticleSchema);
module.exports = Article;