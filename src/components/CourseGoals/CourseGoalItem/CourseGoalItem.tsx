import React, { FC } from "react";
import { DeleteGoalEventHandler } from "../../../models/eventHandlers";

import "./CourseGoalItem.css";

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
