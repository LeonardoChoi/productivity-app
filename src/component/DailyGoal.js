import React, { useState } from "react";

const DailyGoal = ({ onCreate }) => {
  const [newGoal, setNewGoal] = useState({
    goalName: "",
    hoursPerDay: 0,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewGoal((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(newGoal);
    setNewGoal({
      goalName: "",
      hoursPerDay: 0,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>New Goal Name</label>
        <input type="text" onChange={handleChange} name="goalName" />
        <label>Hours per day</label>
        <input type="number" onChange={handleChange} name="hoursPerDay" />
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

export default DailyGoal;
