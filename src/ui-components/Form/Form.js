// @flow
import React, { type Element } from 'react';

import './Form.css';

import Button from '../Button';

type Props = {
  onSubmit: () => void,
  submitText: string,
  children: Element<*>,
};

const Form = ({ onSubmit, submitText, children }: Props) => (
  <form onSubmit={onSubmit}>
    {children}
    <Button type="submit" text={submitText} />
  </form>
);

export default Form;
