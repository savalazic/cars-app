// @flow
import React from 'react';

import Input from '../../ui-components/Input';
import Form from '../../ui-components/Form';

import './TrackActions.css';

type Props = {
  onStart: () => void,
  onRaceDurationChange: () => void,
  disabled: boolean,
};

const TrackActions = ({ onStart, onRaceDurationChange, disabled }: Props) => (
  <div className="track-actions">
    <Form onSubmit={onStart} submitText="Start" disabled={disabled}>
      <Input
        onChange={onRaceDurationChange}
        type="number"
        placeholder="Race duration (ms)"
        required
      />
    </Form>
  </div>
);

export default TrackActions;
