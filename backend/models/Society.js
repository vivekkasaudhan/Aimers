const SocietySchema = new mongoose.Schema({
  name: String,
  email:{
    type:String,
    required:true,
    unique:true
  },
  password:String,
  description: String,

  posts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post"
  }],

  createdAt: {
    type: Date,
    default: Date.now
  }
});
