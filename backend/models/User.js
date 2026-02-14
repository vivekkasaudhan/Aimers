const UserSchema = new mongoose.Schema({
  name: String,

  email: {
    type: String,
    required: true,
    unique: true
  },

  password: String,

  profilePhoto: String,

  likedPosts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post"
  }],

  commentedPosts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post"
  }],

  createdAt: {
    type: Date,
    default: Date.now
  }
});