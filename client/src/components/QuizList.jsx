import React from 'react';
import styles from '../css/QuizList.module.css';
import { Link } from '@reach/router';

const QuizList = props => {
    const { quizzes, select} = props;

    return (
        <div className={styles.quizList}>
            { quizzes.map((quiz, idx)=>{
                return (
                    <div key={idx}>
                        {
                            select ?
                            <p><Link to={`/quizzes/select/${quiz._id}`}>{quiz.name}</Link></p>:
                            <p><Link to={`/quizzes/${quiz._id}`}>{quiz.name}</Link></p>
                        }
                    </div>
                )
            })}
        </div>
    )
}

export default QuizList;