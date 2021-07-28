import React from 'react';
import RoomForm from '../components/RoomForm';
import Header from '../components/Header';

const Main = () => {
    

    return (
        <div className="main">
            <Header 
                home={true} 
                btn1="Create New Quiz" 
                btn1Link="/quizzes/new"
                btn2="See All Quizzes"
                btn2Link="/quizzes"
            />
            <RoomForm/>
        </div>
    )
}

export default Main;