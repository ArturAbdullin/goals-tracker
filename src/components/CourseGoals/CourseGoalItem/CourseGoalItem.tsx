import React, { FC } from "react";

import "./CourseGoalItem.css";

export type DeleteGoalEventHandler = (id: string) => void;

type CourseGoalItemProps = {
  children?: React.ReactNode;
  id: string;
  onDelete: DeleteGoalEventHandler;
};

const CourseGoalItem: FC<CourseGoalItemProps> = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <li className="goal-item" onClick={deleteHandler}>
      {props.children}
    </li>
  );
};

export default CourseGoalItem;
