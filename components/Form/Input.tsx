import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Components
import {
  StyledInput,
  StyledLabel,
  StyledBorder,
} from '../LandingPage/ElementComponents';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
`;

interface InputContProps {
  readonly className?: string;
  readonly text: string;
  readonly inputType: string;
  readonly isRequired: boolean;
}

const InputCont = ({ className, text, inputType, isRequired }: InputContProps) => {
  const [userInput, setUserInput] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [validation, setValidation] = useState({
    default: true,
    valid: false,
    invalid: false,
  });

  const [isDefault, setIsDefault] = useState(true);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (userInput.length === 0) {
      setIsDefault(true);
    } else if (userInput.length > 0) {
      setIsDefault(false);
    }
  }, [userInput]);

  const handleInput = (str: string) => {
    if (str.length <= 20 && str.length !== 0) {
     setIsValid(true);
    } else if (str.length >= 20) {
      setIsValid(false);
    }
  };

  return (
    <div className={className}>
      <StyledContainer>
        <StyledLabel
        isActive={isActive}
        isDefault={isDefault}
        isValid={isValid}
        htmlFor={text}
        >
          {text}
        </StyledLabel>
        <StyledInput
          onChange={(e) => {
            handleInput(e.target.value);
            setUserInput(e.target.value);
          }}
          onFocus={() => setIsActive(true)}
          onBlur={(e) => userInput.length === 0 && setIsActive(false)}
          isDefault={isDefault}
          isValid={isValid}
          type={inputType}
          required={isRequired}
          id={text}
          name={text}
        />
      </StyledContainer>
      <StyledBorder isActive={isActive} isDefault={isDefault} isValid={isValid} />
    </div>
  );
};

const StyledInputCont = styled(InputCont)`
  position: relative;
`;

export default StyledInputCont;
