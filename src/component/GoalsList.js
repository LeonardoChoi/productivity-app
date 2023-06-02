import React from "react";
import ShowGoal from "./ShowGoal";

function GoalsList({ weeklyGoal }) {
  const renderedGoals = weeklyGoal.map((goal) => {
    return <ShowGoal key={goal.id} goal={goal} />;
  });

  return <div>{renderedGoals}</div>;
}

export default GoalsList;
