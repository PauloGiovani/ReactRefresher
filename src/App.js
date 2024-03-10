import React, { useState } from 'react';

import GoalList from './components/GoalList/GoalList';
import MySignature from './components/MySignature/MySignature';
import NewGoal from './components/NewGoal/NewGoal';

import './App.css'

// App
const App = () => {

    // Initial state for the goals object
    const [courseGoals, setCourseGoals] = 
    useState([
        {id: 'cg1', text: 'Finish the Course'},
        {id: 'cg2', text: 'Learn all about the Course Main Topic'},
        {id: 'cg3', text: 'Help other students in the Course Q&A'},
        {id: 'cg4', text: 'Create my own App'}
    ])

    // Add a new goal
    const addNewGoalHandler = (newGoal) => {
        if (newGoal.text.length > 0) {
            //setCourseGoals(courseGoals.concat(newGoal));
            setCourseGoals(prevCourseGoals => courseGoals.concat(newGoal));
        }
    };

    // Render the components
    return (
        <div className='course-goals'>
            <h2>Course Goals</h2>
            <GoalList goals={courseGoals} />
            <MySignature />
            <NewGoal onAddGoal={addNewGoalHandler} />
        </div>
    );
};

export default App;
