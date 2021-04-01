import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  title: String,
  description: String,
  category: String,
  imageURL: [],
});

const Exercise = mongoose.model('exercise', exerciseSchema);

export default Exercise;
