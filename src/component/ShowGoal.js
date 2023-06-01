import React from "react";

function ShowGoal({ goal }) {
  return (
    <div>
      <h1>{goal.goalTitle}</h1>
      <p>{goal.goalHours}</p>
    </div>
  );
}

export default ShowGoal;
