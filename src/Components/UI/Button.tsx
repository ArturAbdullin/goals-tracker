import React, { FC } from "react";

import "./Button.css";

type ButtonProps = {
  children?: React.ReactNode;
  type: "submit" | "button";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const Button: FC<ButtonProps> = (props) => {
  return (
    <button type={props.type} className="button" onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
