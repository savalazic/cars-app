// @flow
import React, { type Element } from 'react';

import './Form.css';

import Button from '../Button';

type Props = {
  onSubmit: () => void,
  submitText: string,
  children: Element<*>,
  disabled: ?boolean,
};

const Form = ({
  onSubmit, submitText, children, disabled,
}: Props) => (
  <form onSubmit={onSubmit}>
    {children}
    <Button type="submit" text={submitText} disabled={disabled} />
  </form>
);

export default Form;
