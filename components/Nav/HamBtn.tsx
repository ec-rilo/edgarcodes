import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

interface HamLayerProps {
  readonly isActive: boolean;
};

const HamLayer = styled.div<HamLayerProps>`
  background-color: var(--clr-gainsboro);
  height: 1px;
  width: 100%;
  transition: width 0.2s;
  ${({ isActive }) => {
    if (isActive) {
      return `
      width: 40%;
    `;
    }
  }}
`;

interface LongHamLayerProps {
  readonly isActive: boolean;
}

const LongHamLayer = styled.div<LongHamLayerProps>`
  position: relative;
  background-color: var(--clr-gainsboro);
  height: 1px;
  width: 120%;
  transition: width 0.2s;
  ${({ isActive }) => {
    if (isActive) {
      return `
      width: 40%;
    `;
    }
  }}
`;

interface HamBtnProps {
  className?: string,
  isActive: boolean,
}

function HamBtn ({ className, isActive }: HamBtnProps) {
  return (
    <div className={className}>
      <HamLayer isActive={isActive}></HamLayer>
      <LongHamLayer isActive={isActive}></LongHamLayer>
      <HamLayer isActive={isActive}></HamLayer>
    </div>
  );
};

const StyledHamBtn = styled(HamBtn)`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 20px;
  direction: rtl;
`;

export default StyledHamBtn;
