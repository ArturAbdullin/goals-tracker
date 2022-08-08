import React, { FC } from "react";
import { GoalItem } from "../../../models/courseGoalItem";
import CourseGoalItem, { DeleteGoalEventHandler } from "../CourseGoalItem/CourseGoalItem";

import "./CourseGoalList.css";

type CourseGoalListProps = {
  items: GoalItem[];
  onDeleteItem: DeleteGoalEventHandler;
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
