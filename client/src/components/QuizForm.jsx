import React, { useState } from 'react';
import styles from '../css/QuizForm.module.css';

const QuizForm = props => {
    const {questions, questionCount, incrementQCount, addQuestion, quizFormState,
        onSubmitProp, onChangeProp} = props;

    const onSubmitHandler = event => {
        event.preventDefault();
        onSubmitProp(quizFormState);
    }
    return (
        <div className={styles.quizFormContainer}>
            <h2>
                Your quiz can be about anything!
            </h2>
            <p>
                Please give your quiz a name, then enter up to 10 questions and answers!
            </p>
            <div className={styles.quizForm}>
                <form onSubmit={onSubmitHandler}>
                    <div>
                        <label>Quiz Name: </label>
                        <input type="text" name="name" onChange={onChangeProp}/>
                    </div>
                    { questions.map((question, idx) => {
                            return(
                                <div key={idx}>
                                    <p>{question}</p>
                                    <label>Question: </label>
                                    <input type="text" name="question" id={`q${idx + 1}`} onChange={onChangeProp}/>
                                    <label>Answer: </label>
                                    <input type="text" name="answer" id={`q${idx + 1}`} onChange={onChangeProp}/>
                                </div>
                        )
                    })}
                    {
                        questionCount + 1 <= 10 &&
                        <button type="button" onClick={() => {incrementQCount(); addQuestion(questionCount+1)}}>Add Another Question</button>
                    }
                    <button type="submit">Submit New Quiz</button>
                </form>
            </div>
        </div>
    )
}

export default QuizForm;