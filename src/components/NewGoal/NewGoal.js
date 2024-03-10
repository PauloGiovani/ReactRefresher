import React, { useState } from 'react';

import './NewGoal.css'

// Insert a new goal
const NewGoal = props => {

    // User input
    const [enteredText, setEnteredText] = useState('');

    // Handler to insert the user input
    const addGoalHandler = event => {
        
        // Avoid to send informations to the backend server
        event.preventDefault();

        // Define a new goal object
        const newGoal = {
            id: Math.random().toString(),
            text: enteredText
        };

        setEnteredText('');
        
        // Add the new goal
        props.onAddGoal(newGoal);

    };

    // Handler to get the user input
    const textChangeHandler = event => {
        setEnteredText(event.target.value);
    };

    // Form render
    return (
        <form className='new-goal' onSubmit={addGoalHandler}>
            <input type="text" value={enteredText} onChange={textChangeHandler}/>
            <button type="submit">Add Goal</button>
        </form>
    );
};

export default NewGoal;