import React, {Component} from 'react';
import './RelatedTopic.css';

class RelatedTopic extends Component {
  constructor(props){
    super(props);
    this.getTopic = this.getTopic.bind(this);
  }

  getTopic = () => {
    this.props.getTopic(this.props.topic.name);
  }

  render() {
    return (<p onClick={this.getTopic}>{this.props.topic.name + '(' + this.props.topic.stargazerCount + ')'}</p>);
  }
}

export default RelatedTopic;