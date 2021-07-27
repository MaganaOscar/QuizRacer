import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
                <QuizList quizzes={quizzes}/>
            }
        </div>
    )
}

export default AllQuizzes;