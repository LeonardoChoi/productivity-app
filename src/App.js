import React, { useState, useEffect } from "react";
import DailyGoal from "./component/DailyGoal";
import GoalsList from "./component/GoalsList";

const App = () => {
  const [dailyGoals, setDailyGoal] = useState([]);

  const createDailyGoal = ({ goalTitle, goalHours }) => {
    const updatedGoal = [
      ...dailyGoals,
      {
        id: Math.floor(Math.random() * 9999),
        goalTitle,
        goalHours,
      },
    ];
    setDailyGoal(updatedGoal);
  };

  useEffect(() => {
    console.log(dailyGoals);
  }, [dailyGoals]);

  return (
    <div>
      <DailyGoal onCreate={createDailyGoal} />
      <GoalsList dailyGoals={dailyGoals} />
    </div>
  );
};

export default App;
