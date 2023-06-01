import React, { useState, useEffect } from "react";
import DailyGoal from "./component/DailyGoal";

const App = () => {
  const [dailyGoals, setDailyGoal] = useState([]);

  const createDailyGoal = (newGoal) => {
    const updatedGoal = [
      ...dailyGoals,
      {
        id: Math.floor(Math.random() * 9999),
        name: newGoal,
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
    </div>
  );
};

export default App;
