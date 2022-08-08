import React, { FC } from "react";
import { useState } from "react";
import { AddGoalEventHandler } from "../../../models/eventHandlers";
import Button from "../../UI/Button";

import "./CourseInput.css";

type CourseInputProps = {
  onAddGoal: AddGoalEventHandler;
};

const CourseInput: FC<CourseInputProps> = (props) => {
  const [enteredValue, setEnteredValue] = useState<string>("");

  const goalInputChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label htmlFor="">Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
