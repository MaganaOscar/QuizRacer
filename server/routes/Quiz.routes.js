const QuizController = require("../controllers/quiz.controller");

module.exports = app => {
    app.post('/api/quiz', QuizController.createNewQuiz);
    app.get('/api/quiz', QuizController.findAllQuizzes);
    app.get('/api/quiz/:id', QuizController.getQuiz);
    app.put('/api/quiz/:id', QuizController.updateQuiz);
    app.delete('/api/quiz/:id', QuizController.deleteQuiz);
}