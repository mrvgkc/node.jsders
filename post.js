const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title: String,
    description: String,
    content: String,
    username: String,
    image: String,
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const Post = mongoose.model('Post', PostSchema);

const Post = require('./database/models/Post');

app.post('/posts/store', (req, res) => {
    Post.create(req.body, (error, post) => {
        res.redirect('/')
    })
});

module.exports = Post;