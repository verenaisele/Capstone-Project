import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  title: String,
  description: String,
  category: String,
  imageURL: [],
});

//const ist das Model
//'' das ist der Datenbankname
const Exercise = mongoose.model('exercise', exerciseSchema);

export default Exercise;
