import React from 'react';
import ReactDOM from 'react-dom';
import Topic from './Topic';

it('Topic renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Topic />, div);
});