import PropTypes from 'prop-types';
import { Button, ButtonBox } from './FeedbackOptions.styled';
export default function Feedback({
  clickButtonGood,
  clickButtonNeutral,
  clickButtonBad,
}) {
  return (
    <ButtonBox>
      <Button type="button" onClick={clickButtonGood}>
        Good
      </Button>
      <Button type="button" onClick={clickButtonNeutral}>
        Neutral
      </Button>
      <Button type="button" onClick={clickButtonBad}>
        Bad
      </Button>
    </ButtonBox>
  );
}

Feedback.propTypes = {
  clickButtonGood: PropTypes.func.isRequired,
  clickButtonNeutral: PropTypes.func.isRequired,
  clickButtonBad: PropTypes.func.isRequired,
};
