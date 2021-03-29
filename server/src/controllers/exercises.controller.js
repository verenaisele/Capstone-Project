function getExercise(req, res) {
  Exercise.find()
    .then((exercise) => res.json(exercise))
    .catch((err) => console.log('Route error 404'));
}
