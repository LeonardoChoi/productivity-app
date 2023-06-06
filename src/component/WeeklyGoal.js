import React, { useState } from "react";

const WeeklyGoal = ({ onCreate }) => {
  const [goalTitle, setGoalTitle] = useState("");
  const [goalHours, setGoalHours] = useState("");

  const handleTitleChange = (e) => {
    setGoalTitle(e.target.value);
  };

  const handleHoursChange = (e) => {
    setGoalHours(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(goalTitle, goalHours);
    setGoalTitle("");
    setGoalHours("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>New Goal Name</label>
        <input type="text" onChange={handleTitleChange} value={goalTitle} />
        <label>Hours per day</label>
        <input type="number" onChange={handleHoursChange} value={goalHours} />
        <button>Add</button>
      </form>
      {/* <div className="createDailyGoal">
        <h3>Create a New Daily Goal!</h3>
        <form onSubmit={handleSubmit}>
          <label>Daily Goal</label>
          <input className="input" onChange={handleChange} value={dailyGoal} />
          <button className="button">Create!</button>
        </form>
      </div> */}
    </div>
  );
};

export default WeeklyGoal;
