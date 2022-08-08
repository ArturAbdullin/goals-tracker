import React, { FC } from "react";
import { useState } from "react";
import styled from "styled-components";
import { AddGoalEventHandler } from "../../../models/eventHandlers";
import Button from "../../UI/Button";
import "./CourseInput.css";

const FormControl = styled.div`
  margin: 0.5rem 0;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }

  &.invalid input {
    border-color: red;
  }

  &.invalid label {
    color: red;
  }
`;

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
      <FormControl className={isValid ? "" : "invalid"}>
        <label htmlFor="">Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
