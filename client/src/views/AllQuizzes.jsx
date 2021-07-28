import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import QuizList from '../components/QuizList';

const AllQuizzes = () => {
    const [quizzes, setQuizzes] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/quizzes')
            .then(res => {
                setQuizzes(res.data);
                setLoaded(true);
            })
            .catch( err => console.log(err));
    }, [])

    return (
        <div>
            {loaded && 
                <>
                <Header 
                    home={false}
                    btn1=""
                    btn1Link=""
                    btn2=""
                    btn2Link=""
                />
                <QuizList quizzes={quizzes}/>
                </>
            }
        </div>
    )
}

export default AllQuizzes;