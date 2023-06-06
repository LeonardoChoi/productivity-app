import React from "react";
import ShowGoal from "./ShowGoal";

function GoalsList({ weeklyGoal, deleteGoalById }) {
  const renderedGoals = weeklyGoal.map((goal) => {
    return (
      <ShowGoal deleteGoalById={deleteGoalById} key={goal.id} goal={goal} />
    );
  });

  return <div>{renderedGoals}</div>;
}

export default GoalsList;
