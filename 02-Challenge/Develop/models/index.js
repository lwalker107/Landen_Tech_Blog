const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

Post.belongsTo(User, {
    foreignKey: 'user_id',
  });

// Comment.belongsTo(User, {
//     foreignKey: 'user_id',
//   });

module.exports = { User, Post, Comment };
