import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

// Components
import {
  StyledInput,
  StyledLabel,
  StyledBorder,
} from '../LandingPage/ElementComponents';
import StyledErrorMsg from './ErrorMsg';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
`;

// inputHandler must return true or false.
interface InputContProps {
  readonly className?: string;
  readonly text: string;
  readonly inputType: string;
  readonly isRequired?: boolean;
  readonly inputHandler: Function;
  readonly formSubmitted: boolean;
};

const InputCont = ({
  className, text, inputType, isRequired, inputHandler, formSubmitted,
}: InputContProps) => {
  const [userInput, setUserInput] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [isDefault, setIsDefault] = useState(true);
  const [isValid, setIsValid] = useState(false);
  const [builtInValidity, setBuiltInValidity] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const inputElem = useRef(null);

  useEffect(() => {
    if (userInput.length === 0) {
      setIsDefault(true);
    } else if (userInput.length > 0) {
      setIsDefault(false);
    }
  }, [userInput]);

  useEffect(() => {
    if (userInput.length > 0) {
      const validationResult = inputHandler(userInput, builtInValidity);
      setIsValid(validationResult);
    }

  }, [userInput, inputHandler, builtInValidity]);

  useEffect(() => {
    if (inputElem !== null && formSubmitted) {
      setErrorMsg(inputElem.current.validationMessage);
    }
  }, [formSubmitted, userInput]);

  return (
    <div className={className}>
      <div style={{ position: "relative" }}>
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
              setUserInput(e.target.value);
              setBuiltInValidity(e.target.checkValidity());
            }}
            onFocus={() => setIsActive(true)}
            onBlur={() => userInput.length === 0 && setIsActive(false)}
            isDefault={isDefault}
            isValid={isValid}
            type={inputType}
            required={isRequired}
            id={text}
            name={text}
            ref={inputElem}
          />
        </StyledContainer>
        <StyledBorder isActive={isActive} isDefault={isDefault} isValid={isValid} />
      </div>
      <StyledErrorMsg visible={formSubmitted}>{errorMsg}</StyledErrorMsg>
    </div>
  );
};

const StyledInputCont = styled(InputCont)`
  position: relative;
`;

export default StyledInputCont;
