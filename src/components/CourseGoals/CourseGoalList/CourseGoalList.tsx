import React, { FC } from "react";
import { GoalItem } from "../../../models/courseGoalItem";
import CourseGoalItem from "../CourseGoalItem/CourseGoalItem";

import "./CourseGoalList.css";

type CourseGoalListProps = {
  items: GoalItem[];
  onDeleteItem: (id: string) => void;
};

const CourseGoalList: FC<CourseGoalListProps> = (props) => {
  return (
    <ul className="goal-list">
      {props.items.map((goal) => (
        <CourseGoalItem
          key={goal.id}
          id={goal.id}
          onDelete={props.onDeleteItem}
        >
          {goal.text}
        </CourseGoalItem>
      ))}
    </ul>
  );
};

export default CourseGoalList;
