import React from 'react';
import styles from '../css/Header.module.css';
import { Link } from '@reach/router';

const Header = props => {

    return (
        <div className={styles.head}>
            <h1>QuizRacer</h1>
            <button><Link to="/quizzes/new">Create New Quiz</Link></button>
            <button><Link to="/quizzes">See All Quizzes</Link></button>
        </div>
    )
}

export default Header;