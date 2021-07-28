import React from 'react';
import styles from '../css/QuizList.module.css';

const QuizList = props => {
    const { quizzes} = props;

    return (
        <div className={styles.quizList}>
            { quizzes.map((quiz, idx)=>{
                return (
                    <div key={idx}>
                        <p>{quiz.name}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default QuizList;