import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import Main from './views/Main';
import AllQuizzes from './views/AllQuizzes';
import NewQuiz from './views/NewQuiz';
import ShowQuiz from './views/ShowQuiz';
import SelectQuiz from './views/SelectQuiz';

function App() {
  return (
    <div>
      <Router>
        <Main path="/"/>
        <AllQuizzes path="/quizzes"/>
        <NewQuiz path="/quizzes/new"/>
        <SelectQuiz path="/quizzes/select"/>
        <ShowQuiz path="/quizzes/:id"/>
      </Router>
    </div>
  );
}

export default App;
