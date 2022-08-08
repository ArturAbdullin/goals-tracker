import React from "react";
import CourseInput from "./components/CourseGoals/CourseInput/CourseInput";

import './App.css';

function App() {
  let content = (
    <p style={{ textAlign: "center" }}>No goals found. Maybe add one?</p>
  );

  return (
    <div>
      <section id="goal-form">
        <CourseInput onAddGoal={() => {}} />
      </section>
      <section id="goals">{content}</section>
    </div>
  );
}

export default App;
