import React, { useState } from "react";
import CourseInput from "./components/CourseGoals/CourseInput/CourseInput";
import { GoalItem } from "./models/courseGoalItem";
import CourseGoalList from "./components/CourseGoals/CourseGoalList/CourseGoalList";
import {
  AddGoalEventHandler,
  DeleteGoalEventHandler,
} from "./models/eventHandlers";

import "./App.css";

function App() {
  const [courseGoals, setCourseGoals] = useState<GoalItem[]>([
    new GoalItem("Do all exercises!", "g1"),
    new GoalItem("Finish the course", "g2"),
  ]);

  const addGoalHandler: AddGoalEventHandler = (goal) => {
    setCourseGoals((prevGoals) => {
      const updatedGoals = [...prevGoals];
      updatedGoals.push(new GoalItem(goal, new Date().toISOString()));
      return updatedGoals;
    });
  };

  const deleteItemHandler: DeleteGoalEventHandler = (goalId: string) => {
    setCourseGoals((prevGoals) => {
      const updatedGoals = prevGoals.filter((goal) => goal.id !== goalId);
      return updatedGoals;
    });
  };

  let content = (
    <p style={{ textAlign: "center" }}>No goals found. Maybe add one?</p>
  );

  if (courseGoals.length > 0) {
    content = (
      <CourseGoalList items={courseGoals} onDeleteItem={deleteItemHandler} />
    );
  }

  return (
    <div>
      <section id="goal-form">
        <CourseInput onAddGoal={addGoalHandler} />
      </section>
      <section id="goals">{content}</section>
    </div>
  );
}

export default App;
