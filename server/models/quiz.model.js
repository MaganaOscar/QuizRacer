const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema({
    question: {
        type: String,
        minlength: [5, "Questions must be at least 5 characters"],
        required: [true, "Answers must have questions"]
    },
    answer: {
        type: String,
        minlength: [1, "Answers must be at least 1 character long"],
        required: [true, "Questions must have answers"]
    } 
})

const QuizSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Quiz name is required"],
        minlength: [3, "Quiz name must be at least 3 characters"],
        maxlength: [40, "Quiz name must be less than 40 characters"]
    },
    q1: {
        type: QuestionSchema,
        required: [true, "Question 1 is required"],
    },
    q2: QuestionSchema,
    q3: QuestionSchema,
    q4: QuestionSchema,
    q5: QuestionSchema,
    q6: QuestionSchema,
    q7: QuestionSchema,
    q8: QuestionSchema,
    q9: QuestionSchema,
    q10: QuestionSchema,
    highScores: [{
        user: {
            type: String,
            required: [true, "High scores require a username"]
        }, 
        time: {
            type: String,
            required: [true, "High Scores require a time"]
        }
    }]
},{timestamps: true});

const Quiz = mongoose.model("Quiz", QuizSchema);
module.exports = Quiz;