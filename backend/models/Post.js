const PostSchema = new mongoose.Schema({
  society: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Society"
  },

  text: String,
  image: String,
  pdf: String,
  link: String,

  likes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }],

  comments: [{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    text: String
  }],

  createdAt: {
    type: Date,
    default: Date.now
  }
});
