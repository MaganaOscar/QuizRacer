const { mongoose } = require("mongoose");
const Quiz = require("../models/quiz.model");

module.exports.findAllQuizzes = (req, res) => {
    Quiz.find()
        .then(allQuizzes => res.json(allQuizzes))
        .catch(err => res.status(400).json({message: "Something went wrong", error: err}));
}

module.exports.createNewQuiz = (req, res) => {
    Quiz.create(req.body)
        .then(new_quiz => res.json(new_quiz))
        .catch(err => res.status(400).json({message:"Something went wrong", error: err}));
}

module.exports.getQuiz = (req, res) => {
    Quiz.findOne({_id: req.params.id})
        .then(this_quiz => res.json(this_quiz))
        .catch(err => res.status(400).json({message:"Something went wrong", error: err}));
}

module.exports.updateQuiz = (req, res) => {
    Quiz.findOneAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators:true})
        .then(updatedQuiz => res.json(updatedQuiz))
        .catch(err => res.status(400).json({message: "Something went wrong", error: err}));
}

module.exports.deleteQuiz = (req, res) => {
    Quiz.deleteOne({_id: req.params.id})
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.status(400).json({message: "Something went wrong", error: err}));
}