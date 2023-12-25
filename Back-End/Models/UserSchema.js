const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const { Schema } = mongoose;

const userSchema = new Schema({
  username:  { type: String, require: true },
  password:  { type: String, require: true },
  isAdmin:  { type: Boolean, require: false },
});

userSchema.pre('save', async function (next) {
  const user = this;
  if (!user.isModified('password')) return next();

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(user.password, salt);

  user.password = hash;
  
  next();
});

module.exports = mongoose.model('userSchema', userSchema);