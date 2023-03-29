import { Component } from 'react';
import { Wrapper } from './App.styled';

import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedbackOptions = feedback => {
    this.setState(prevState => ({
      [feedback]: prevState[feedback] + 1,
    }));
  };

  countTotalFeedback = () => {
    let total = 0;
    const { good, neutral, bad } = this.state;
    total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    let positivePercentage = 0;
    const { good, neutral, bad } = this.state;
    positivePercentage = (good / (good + neutral + bad)) * 100;
    return Math.round(positivePercentage) || 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    return (
      <Wrapper>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.handleFeedbackOptions}
          />
        </Section>
        <Section title="Statistics">
          {total === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              countTotalFeedback={total}
              countPositiveFeedbackPercentage={positivePercentage}
            />
          )}
        </Section>
      </Wrapper>
    );
  }
}

export default App;
