import React, {Component} from 'react';
import './Topic.css';

class Topic extends Component {
  render() {
    return (
      <p>
        Topic Name: {this.props.topicName}<br/>
        Stargazer Count: {this.props.topicStargazerCount}
      </p>
    );
  }
}

export default Topic;