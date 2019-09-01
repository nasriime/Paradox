const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    photo: String,
    text: String,
    comments: [{
        id: String,
        text: String,
    }],
    published_by: {type: Schema.Types.ObjectId, ref: 'Writer'},
    published_at: Date,
    created_at: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Article', articleSchema);