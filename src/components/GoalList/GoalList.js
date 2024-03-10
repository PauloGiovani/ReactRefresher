import React from 'react';

import './GoalList.css';

// Render the goal list values
const GoalList = props => {
    return (
        <ul className='goal-list'> 
            { 
                props.goals.map((goal) => {
                    return <li key={goal.id}>{goal.text}</li>;
                })
            }
        </ul>
    );
};

export default GoalList;