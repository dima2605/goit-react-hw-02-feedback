import PropTypes from 'prop-types';
import shortid from 'shortid';
import { Button, ButtonBox } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonBox>
      {options.map(btnName => (
        <Button
          key={shortid.generate()}
          type="button"
          onClick={() => onLeaveFeedback(btnName)}
        >
          {btnName}
        </Button>
      ))}
    </ButtonBox>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
