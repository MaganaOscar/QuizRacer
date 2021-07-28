import React from 'react';
import styles from '../css/Header.module.css';
import { Link } from '@reach/router';

const Header = props => {
    const { home, btn1, btn1Link, btn2, btn2Link } = props;
    return (
        <div className={styles.head}>
            {
                home ?
                <h1>QuizRacer</h1>:
                <h1><Link to="/">QuizRacer</Link></h1>
            }
            <button><Link to={btn1Link}>{btn1}</Link></button>
            <button><Link to={btn2Link}>{btn2}</Link></button>
        </div>
    )
}

export default Header;