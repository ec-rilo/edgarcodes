import styled from 'styled-components';

interface ErrorMsgProps {
  readonly visible: boolean;
}

const StyledErrorMsg = styled.p<ErrorMsgProps>`
  margin-top: 10px;
  color: var(--clr-salmon);
  opacity: 0;
  font-size: .8rem;

  ${({ visible }) => visible && 'opacity: 1;'}
`;

export default StyledErrorMsg;
