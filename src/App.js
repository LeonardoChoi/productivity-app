import axios from "axios";
import React, { useState, useEffect, useCallback } from "react";
import WeeklyGoal from "./component/WeeklyGoal";
import GoalsList from "./component/GoalsList";

const App = () => {
  // refactor it with a real server and axios
  const [weeklyGoal, setWeeklyGoal] = useState([]);

  const fetchWeeklyGoals = useCallback(async () => {
    const response = await axios.get("http://localhost:3001/weeklyGoal");
    setWeeklyGoal(response.data);
  }, []);

  useEffect(() => {
    fetchWeeklyGoals();
  }, [fetchWeeklyGoals]);

  const createWeeklyGoal = async (goalTitle, goalHours) => {
    const response = await axios.post("http://localhost:3001/weeklyGoal", {
      goalTitle,
      goalHours,
    });

    const updatedGoals = [...weeklyGoal, response.data];
    setWeeklyGoal(updatedGoals);
  };

  const deleteGoalById = async (id) => {
    await axios.delete(`http://localhost:3001/weeklyGoal/${id}`);

    const updatedGoals = weeklyGoal.filter((goal) => {
      return goal.id !== id;
    });
    setWeeklyGoal(updatedGoals);
  };

  useEffect(() => {
    console.log(weeklyGoal);
  }, [weeklyGoal]);

  return (
    <div>
      <WeeklyGoal onCreate={createWeeklyGoal} />
      <GoalsList deleteGoalById={deleteGoalById} weeklyGoal={weeklyGoal} />
    </div>
  );
};

export default App;
