import React, { useState } from "react";
import WeeklyGoal from "./WeeklyGoal";

function ShowGoal({ goal, deleteGoalById }) {
  const [accomplishedHours, setAccomplishedHours] = useState("");
  const [totalAccHours, setTotalAccHours] = useState(0);

  // const changeHours = (e) => {
  //   // const updatedHours = accomplishedHours + e.target.value;
  // };
  const totalAccHoursFunction = (hours) => {
    const updatedHours = parseFloat(totalAccHours) + parseFloat(hours);
    setTotalAccHours(updatedHours);
  };

  const handleChange = (e) => {
    setAccomplishedHours(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    totalAccHoursFunction(accomplishedHours);
    setAccomplishedHours("");
  };

  const handleDelete = () => {
    deleteGoalById(goal.id);
  };

  return (
    <div>
      <h1>Goal: {goal.goalTitle}</h1>
      <h3>
        {totalAccHours}/{goal.goalHours} Hours |{" "}
        {((totalAccHours / goal.goalHours) * 100).toFixed(2)}%
      </h3>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={accomplishedHours}
          onChange={handleChange}
        />
        <button>Add </button>
        <button onClick={handleDelete}>Delete Goal</button>
      </form>
    </div>
  );
}

export default ShowGoal;
