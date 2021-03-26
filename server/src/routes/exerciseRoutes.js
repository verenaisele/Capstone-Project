import express from 'express';
import Exercise from '../models/Exercise.js'

const router = express.Router();

//controllers könnte ausgelagerte funktion enthalten, dann ("exercises", functionsname)
router.get('/exercises', (req, res) {
  Exercise.find()
  .then((exercise) => res.json(exercise))
  .catch((err) => console.log('Route error 404'))
})

export default router