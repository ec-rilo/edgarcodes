import exp from 'constants';
import { keyframes } from 'styled-components';

const fadeInFromLeft = keyframes`
  0% {
    opacity: 0;
    left: -100px;
  }
  100% {
    opacity: 1;
    left: 0;
  }
`;

const animations = {
  fadeInFromLeft
}

export default animations;