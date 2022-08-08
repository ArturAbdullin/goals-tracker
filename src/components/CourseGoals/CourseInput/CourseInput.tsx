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
  const [isValid, setIsValid] = useState<boolean>(true);

  const goalInputChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.value.trim().length > 0) setIsValid(true);
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid && "invalid"}`}>
        <label htmlFor="">Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
