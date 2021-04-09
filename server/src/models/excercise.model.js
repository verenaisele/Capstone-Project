import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  title: String,
  titelImg: String,
  description: [],
  category: String,
  imageURL: [],
});

const Exercise = mongoose.model('exercise', exerciseSchema);

export default Exercise;
