// @flow
import React from 'react';

import Input from '../../ui-components/Input';
import Form from '../../ui-components/Form';

import './TrackActions.css';

type Props = {
  onSubmit: () => void,
};

const TrackActions = ({ onSubmit }: Props) => (
  <div className="track-actions">
    <Form onSubmit={onSubmit} submitText="Start">
      <Input type="number" placeholder="Animation speed" required />
    </Form>
  </div>
);

export default TrackActions;
