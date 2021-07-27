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
    q1: {
        type: QuestionSchema,
        required: [true, "Question 1 is required"],
    },
    q2: {
        type: String,
        minlength: [5, "Questions must be at least 5 characters long"],
        answer: {
            type: String,
            required: [true, "Questions must have answers"],
            minlength: [1, "Answers must be at least 1 character long"]
        }
    },
    q3: {
        type: String,
        minlength: [5, "Questions must be at least 5 characters long"],
        answer: {
            type: String,
            required: [true, "Questions must have answers"],
            minlength: [1, "Answers must be at least 1 character long"]
        }
    },
    q4: {
        type: String,
        minlength: [5, "Questions must be at least 5 characters long"],
        answer: {
            type: String,
            required: [true, "Questions must have answers"],
            minlength: [1, "Answers must be at least 1 character long"]
        }
    },
    q5: {
        type: String,
        minlength: [5, "Questions must be at least 5 characters long"],
        answer: {
            type: String,
            required: [true, "Questions must have answers"],
            minlength: [1, "Answers must be at least 1 character long"]
        }
    },
    q6: {
        type: String,
        minlength: [5, "Questions must be at least 5 characters long"],
        answer: {
            type: String,
            required: [true, "Questions must have answers"],
            minlength: [1, "Answers must be at least 1 character long"]
        }
    },
    q7: {
        type: String,
        minlength: [5, "Questions must be at least 5 characters long"],
        answer: {
            type: String,
            required: [true, "Questions must have answers"],
            minlength: [1, "Answers must be at least 1 character long"]
        }
    },
    q8: {
        type: String,
        minlength: [5, "Questions must be at least 5 characters long"],
        answer: {
            type: String,
            required: [true, "Questions must have answers"],
            minlength: [1, "Answers must be at least 1 character long"]
        }
    },
    q9: {
        type: String,
        minlength: [5, "Questions must be at least 5 characters long"],
        answer: {
            type: String,
            required: [true, "Questions must have answers"],
            minlength: [1, "Answers must be at least 1 character long"]
        }
    },
    q10: {
        type: String,
        minlength: [5, "Questions must be at least 5 characters long"],
        answer: {
            type: String,
            required: [true, "Questions must have answers"],
            minlength: [1, "Answers must be at least 1 character long"]
        }
    },
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