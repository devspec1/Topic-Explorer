import React, {Component} from 'react';
import RelatedTopic from '././components/RelatedTopic/RelatedTopic';
import Topic from '././components/Topic/Topic';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      currentTopicName: '',
      currentTopicStargazerCount: '',
      relatedTopics: [],
    }

    this.getTopic = this.getTopic.bind(this);
  }

  componentDidMount(){
    this.getTopic("react");
  }

  getTopic(topicName){
    var mainClass = this;
    var url = "https://api.github.com/graphql";
    var xhr = new XMLHttpRequest();

    xhr.open("POST", url);
    xhr.setRequestHeader("Authorization", "bearer " + process.env.REACT_APP_GITHUB_GRAPHQL_API_TOKEN);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function () {
       if (xhr.readyState === 4) {
          var response = JSON.parse(xhr.responseText);
          var relatedTopics = response.data.topic.relatedTopics;

          mainClass.setState({
            currentTopicName: topicName,
            currentTopicStargazerCount: response.data.topic.stargazerCount,
            relatedTopics: relatedTopics
          });
       }};
    
    var data = JSON.stringify({
      query: `{
        topic(name: "` + topicName + `") {
          name
          stargazerCount
          relatedTopics(first: 10) {
            name
            stargazerCount
          }
        }
      }`,
    });
    xhr.send(data);
  }

  render() {
    const { getTopic } = this;
    return (
      <div className="main-section">
        <div className="row m-0">
          <div className="col-sm-6 current-topic-section p-0 py-5">
            <Topic
              topicName={this.state.currentTopicName}
              topicStargazerCount={this.state.currentTopicStargazerCount}
            />
          </div>
          <div className="col-sm-6 current-topic-section p-0 py-5">
            <h2>Related Topics</h2><br/>

            {this.state.relatedTopics.map(function(topic, index){
              return (
                <RelatedTopic
                  key = {index}
                  topic = {topic}
                  getTopic = {getTopic}
                />)
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
