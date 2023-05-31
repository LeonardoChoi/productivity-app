import React, { useState } from "react";

const DailyGoal = () => {
  const [dailyGoal, setDailyGoal] = useState("");

  const handleChange = (event) => {
    setDailyGoal(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createDailyGoal(dailyGoal);
    setDailyGoal("");
  };

  const createDailyGoal = (dailyGoal) => {
    const updatedGoal = [
      ...dailyGoal,
      {
        id: Math.floor(Math.random() * 9999),
        name: dailyGoal,
      },
    ];
    setDailyGoal(updatedGoal);
  };

  return (
    <div>
      <div className="createDailyGoal">
        <h3>Create a New Daily Goal!</h3>
        <form onSubmit={handleSubmit}>
          <label>Daily Goal</label>
          <input className="input" onChange={handleChange} value={dailyGoal} />
          <button className="button">Create!</button>
        </form>
      </div>
    </div>
  );
};

export default DailyGoal;
