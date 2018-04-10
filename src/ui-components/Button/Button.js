// @flow
import React from 'react';

import './Button.css';

type Props = {
  text: string,
  disabled: ?boolean,
};

const Button = ({ text, disabled }: Props) => (
  <button disabled={disabled}>{text}</button>
);

export default Button;
