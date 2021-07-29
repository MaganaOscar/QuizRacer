import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import QuizList from '../components/QuizList';

const AllQuizzes = (props) => {
    const { select } = props;
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
                    btn1="Create New Quiz" 
                    btn1Link="/quizzes/new"
                    btn2=""
                    btn2Link=""
                />
                {
                    select ?
                    <QuizList select={select} quizzes={quizzes}/>:
                    <QuizList select={select} quizzes={quizzes}/>
                }
                </>
            }
        </div>
    )
}

export default AllQuizzes;