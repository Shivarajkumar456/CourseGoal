import React from 'react';

import './Button.css';

import '../../CourseGoals/CourseInput/CourseInput'

const Button = props => {
  return (
    <button type={props.type} className={`button ${!props.checkValid?'invalid':''}`} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
