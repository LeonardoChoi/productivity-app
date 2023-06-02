import React, { useState } from "react";

function ShowGoal({ goal }) {
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
      </form>
    </div>
  );
}

export default ShowGoal;
