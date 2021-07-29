import react from 'react';
import AllQuizzes from './AllQuizzes';

const SelectQuiz = props => {


    return (
        <div>
            <div>
                <AllQuizzes select={true}/>
            </div>
            <div>
                <p>Select a Quiz!</p>
            </div>
        </div>
    )
}

export default SelectQuiz;