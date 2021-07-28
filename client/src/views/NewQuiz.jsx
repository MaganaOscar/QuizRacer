import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import QuizForm from '../components/QuizForm';

const NewQuiz = () => {
    const [questionCount, setQuestionCount] = useState(1); 
    const [questions, setQuestions] = useState([]);
    const [loaded, setLoaded] = useState(false); 
    const [quizFormState, setQuizFormState] = useState({
        name: "",
        q1: {
            question: "",
            answer: ""
        }
    });

    useEffect( () => {
        for(let index = 0; index < questionCount; index++){
            setQuestions([...questions, `Question ${index + 1}: `])
        }
        setLoaded(true);
    }, [])

    const incrementQCount = () => {
        setQuestionCount(questionCount+1);
    }

    const addQuestion = (qCount) => {
        setQuestions([...questions, `Question ${qCount}: `])
    }

    const changeHandler = e => {
        if(e.target.name === "name") {
            setQuizFormState({
                ...quizFormState,
                [e.target.name] : e.target.value
            })
        } else {
            setQuizFormState({
                ...quizFormState,
                [e.target.id] : {
                    ...quizFormState[e.target.id],
                    [e.target.name]: e.target.value
                }
            })
        }
    }

    const createQuiz = quiz => {
        axios.post('http://localhost:8000/api/quizzes', quiz)
            .then(res => console.log(res))
            .catch(err => console.log(err.response));
    }

    return (
        <div>
            <Header 
                home={false} 
                btn1="Home" 
                btn1Link="/"
                btn2="See All Quizzes"
                btn2Link="/quizzes"
            />
            {loaded &&
                <QuizForm 
                    questions={questions} 
                    questionCount={questionCount} 
                    incrementQCount={incrementQCount}
                    addQuestion={addQuestion}
                    quizFormState={quizFormState} 
                    onSubmitProp={createQuiz} 
                    onChangeProp={changeHandler}
                />
            }
        </div>
    )
}

export default NewQuiz;