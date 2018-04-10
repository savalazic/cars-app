// @flow
import React from 'react';

import './Button.css';

type Props = {
  text: string,
};

const Button = ({ text }: Props) => <button>{text}</button>;

export default Button;
