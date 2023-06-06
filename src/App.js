import axios from "axios";
import React, { useState, useEffect } from "react";
import WeeklyGoal from "./component/WeeklyGoal";
import GoalsList from "./component/GoalsList";

const App = () => {
  // refactor it with a real server and axios
  const [weeklyGoal, setWeeklyGoal] = useState([]);

  const fetchGoals = 

  const createWeeklyGoal = async (goalTitle, goalHours) => {
    const response = await axios.post("http://localhost:3001/goals", {
      goalTitle,
      goalHours,
    });

    const updatedGoals = [...weeklyGoal, response.data];
    setWeeklyGoal(updatedGoals);
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
