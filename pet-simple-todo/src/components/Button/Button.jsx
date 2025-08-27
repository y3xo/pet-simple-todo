import React from 'react';
import './Button.css'
import {moduleClassName} from "../../utils.js";

const Button = ({module, icon, title, ...rest}) => {
  const className = moduleClassName('button', module)
  return (
    <button className={className} {...rest}>
      {
        module === 'icon'
          ? icon
          : title
      }
    </button>
  );
};

export default Button;
