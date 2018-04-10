// @flow
import React from 'react';

import './Input.css';

type Props = {
  onChange: () => void,
  placeholder: ?string,
  type: ?string,
  required: ?boolean,
};

const Input = ({
  onChange, placeholder, type, required,
}: Props) => (
  <input
    type={type}
    placeholder={placeholder}
    onChange={onChange}
    required={required}
  />
);

export default Input;
