// @flow
import React from 'react';

import './Input.css';

type Props = {
  onChange: () => void,
  placeholder: ?string,
  type: ?string,
  required: ?boolean,
  disabled: ?boolean,
};

const Input = ({
  onChange, placeholder, type, required, disabled,
}: Props) => (
  <input
    type={type}
    placeholder={placeholder}
    onChange={onChange}
    required={required}
    disabled={disabled}
  />
);

export default Input;
