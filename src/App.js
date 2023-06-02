import React, { useState, useEffect } from "react";
import WeeklyGoal from "./component/WeeklyGoal";
import GoalsList from "./component/GoalsList";

const App = () => {
  const [weeklyGoal, setWeeklyGoal] = useState([]);

  const createWeeklyGoal = ({ goalTitle, goalHours }) => {
    const updatedGoal = [
      ...weeklyGoal,
      {
        id: Math.floor(Math.random() * 9999),
        goalTitle,
        goalHours,
      },
    ];
    setWeeklyGoal(updatedGoal);
  };

  useEffect(() => {
    console.log(weeklyGoal);
  }, [weeklyGoal]);

  return (
    <div>
      <WeeklyGoal onCreate={createWeeklyGoal} />
      <GoalsList weeklyGoal={weeklyGoal} />
    </div>
  );
};

export default App;
