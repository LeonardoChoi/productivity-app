import React from "react";
import ShowGoal from "./ShowGoal";

function GoalsList({ dailyGoals }) {
  const renderedGoals = dailyGoals.map((goal) => {
    return <ShowGoal key={goal.id} goal={goal} />;
  });

  return <div>{renderedGoals}</div>;
}

export default GoalsList;
