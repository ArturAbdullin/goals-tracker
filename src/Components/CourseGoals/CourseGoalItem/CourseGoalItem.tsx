import React, { FC } from "react";

import "./CourseGoalItem.css";

type CourseGoalItemProps = {
  children?: React.ReactNode;
  id: string;
  onDelete?: (s: string) => void;
};

const CourseGoalItem: FC<CourseGoalItemProps> = (props) => {
  const deleteHandler = () => {
    props.onDelete?.(props.id);
  };

  return (
    <li className="goal-item" onClick={deleteHandler}>
      {props.children}
    </li>
  );
};

export default CourseGoalItem;
