import express from 'express';
import Exercise from '../models/excercise.model.js';

const router = express.Router();

router.get('/exercises', (req, res) => {
  Exercise.find()
    .then((exercise) => res.json(exercise))
    .catch((err) => res.status(404).send('Route error 404'));
});

router.get('/exercises/:exerciseId', (req, res) => {
  const exerciseId = req.params.exerciseId;

  Exercise.findOne({ _id: exerciseId })
    .then((exercise) => res.json(exercise))
    .catch((err) => console.log('Route error 404'));
});

export default router;
