import React from 'react';
import styles from '../css/QuizList.module.css';
import { Link } from '@reach/router';

const QuizList = props => {
    const { quizzes} = props;

    return (
        <div className={styles.quizList}>
            { quizzes.map((quiz, idx)=>{
                return (
                    <div key={idx}>
                        <p><Link to={`/quizzes/${quiz._id}`}>{quiz.name}</Link></p>
                    </div>
                )
            })}
        </div>
    )
}

export default QuizList;