function getExercise(req, res) {
  Exercise.find()
    .then((exercise) => res.json(exercise))
    .catch((err) => res.status(404).send("some message");
}
