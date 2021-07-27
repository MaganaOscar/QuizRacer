import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import Main from './views/Main';
import AllQuizzes from './views/AllQuizzes';
import NewQuiz from './views/NewQuiz';

function App() {
  return (
    <div>
      <Router>
        <Main path="/"/>
        <AllQuizzes path="/quizzes"/>
        <NewQuiz path="/quizzes/new"/>
      </Router>
    </div>
  );
}

export default App;
