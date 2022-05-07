const mongoose = require('mongoose');

const usercommentSchema = new mongoose.Schema({
    
    name: {
        type: String,
        required: true
    },
    title: {
        type: String, 
    },

});

const userCrawler = mongoose.model('Comment', usercommentSchema);
module.exports = userCrawler;