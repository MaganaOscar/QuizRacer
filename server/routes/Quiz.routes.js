const QuizController = require("../controllers/quiz.controller");

module.exports = app => {
    app.post('/api/quizzes', QuizController.createNewQuiz);
    app.get('/api/quizzes', QuizController.findAllQuizzes);
    app.get('/api/quizzes/:id', QuizController.getQuiz);
    app.put('/api/quizzes/:id', QuizController.updateQuiz);
    app.delete('/api/quizzes/:id', QuizController.deleteQuiz);
}