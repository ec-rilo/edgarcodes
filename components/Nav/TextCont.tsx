import React from 'react';
import styled from 'styled-components';

interface StyledActiveBtnProps {
  readonly isActive: boolean;
}

const StyledActiveBtn = styled.p<StyledActiveBtnProps>`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  transition: top 0.2s ease;
  ${({ isActive }) => {
    if (isActive) {
      return 'top: -150%';
    }
  }}
`;

interface StyledInactiveBtn {
  readonly isActive: boolean;
}

const StyledInactiveBtn = styled.p<StyledInactiveBtn>`
  position: absolute;
  top: 200%;
  transition: top 0.2s ease;
  ${({ isActive }) => {
    if (isActive) {
      return `
      top: 50%;
      transform: translate(0, -50%);
    `;
    }
  }}
`;

interface TextContProps {
  className?: string,
  isActive: boolean,
};

const TextCont = ({ className, isActive }: TextContProps) => {
return (
  <div className={className}>
    <StyledActiveBtn isActive={isActive}>Menu</StyledActiveBtn>
    <StyledInactiveBtn isActive={isActive}>Close</StyledInactiveBtn>
  </div>
);
};

const StyledTextCont = styled(TextCont)`
  position: relative;
  height: 20px;
  width: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export default StyledTextCont;
