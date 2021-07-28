import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import axios from 'axios'

const ShowQuiz = props => {
    const { id } = props
    const [quiz, setQuiz] = useState();
    const [loaded, setLoaded] = useState(false);
    let quizQuestions = [];
    console.log("quiz", quiz)

    useEffect(() => {
        axios.get('http://localhost:8000/api/quizzes/' + id)
            .then(res => {
                setQuiz(res.data);
                setLoaded(true);
            })
            .catch(err => console.log(err));
    }, [])

    if(loaded) {
        let pattern = /q[0-9]/;
        for (let key in quiz) {
            if (!pattern.test(key)){
                continue;
            } else {
                quizQuestions.push(quiz[key])
            }
        }
    }
    console.log("quizQuestions", quizQuestions)

    return (
        <div>
        {loaded &&
            <div>
                <Header 
                    home={false}
                    btn1=""
                    btn1Link=""
                    btn2=""
                    btn2Link=""
                />
                <div>
                    {quiz.name}
                    {
                        quizQuestions.map((question, idx) => {
                            return (
                                <div key={idx}>
                                    <p>Question {idx + 1}: {question.question}</p>
                                    <p>Answer: {question.answer}</p>
                                </div>

                            )
                        })
                    }
                </div>
            </div>
        }
        </div>
    )
}

export default ShowQuiz;