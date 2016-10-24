const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  name: { type: String },
  content: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const BlogModel = mongoose.model('BlogModel', blogSchema);

module.exports = BlogModel;
