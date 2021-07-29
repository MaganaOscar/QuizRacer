import React from 'react';
import styles from '../css/RoomForm.module.css';
import { Link } from '@reach/router';

const RoomForm = props => {
    const {createSubmitProp, joinSubmitProp} = props;

    return (
        <div className={styles.roomForm}>
            <form>
                <label>Create a room → </label>
                <button type="submit"><Link to="/quizzes/select">Create</Link></button>
            </form>
            <form>
                <label>Join with a Room Number: </label>
                <input type="text" name="newRoom" id="newRoom" />
                <button type="submit"></button>
            </form>
        </div>
    )
}

export default RoomForm;