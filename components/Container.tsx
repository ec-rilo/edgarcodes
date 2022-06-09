import styled from 'styled-components';

// Assets
import viewport from '../viewportSizes';

interface StyledContainerProps {
  readonly noPadding?: boolean;
  readonly fullPadding?: boolean;
  readonly noWidth?: boolean;
  readonly noPosition?: boolean;
}

const StyledContainer = styled.div<StyledContainerProps>`
  position: relative;
  max-width: 2000px;
  margin: auto;
  padding: 0 20px;

  @media (${viewport.lg}) {
    padding: 0 70px;
  }

  ${({ noPadding }) => noPadding && 'padding: 0;'}
  ${({ fullPadding }) => fullPadding && 'padding: 20px;'}
  ${({ noWidth }) => noWidth && 'max-width: none;'}
  ${({ noPosition }) => noPosition && 'position: static;'}
`;

export default StyledContainer;