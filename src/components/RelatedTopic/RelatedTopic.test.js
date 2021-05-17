import React from 'react';
import ReactDOM from 'react-dom';
import RelatedTopic from './RelatedTopic';

it('RelatedTopic renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RelatedTopic />, div);
});