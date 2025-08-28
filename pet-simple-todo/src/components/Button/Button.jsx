import React from 'react';
import {memo} from "react";
import './Button.css'
import {moduleClassName} from "../../utils.js";

const Button = ({module, icon, title, ...rest}) => {
  const className = moduleClassName('button', module)
  return (
    <button className={className} {...rest}>
      {
        module === 'icon'
          ? icon
          : title.toUpperCase()
      }
    </button>
  );
};

export default memo(Button);
