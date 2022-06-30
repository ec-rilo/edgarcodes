import React, { useState, useEffect, useRef, ChangeEvent, useCallback } from 'react';
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
  readonly errorHandler: Function;
  readonly formSubmitted: boolean;
};

const InputCont = ({
  className, text, inputType, isRequired, errorHandler, formSubmitted,
}: InputContProps) => {
  const [userInput, setUserInput] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const inputElem = useRef<HTMLInputElement>(null);

  const handleErrors = (elem: HTMLInputElement) => {
    elem.setCustomValidity('');
    const errorText = errorHandler(elem.value, elem.validationMessage);
    errorText ? setIsValid(false) : setIsValid(true);
    elem.setCustomValidity(errorText);
  };

  const updateErrorMsg = useCallback((elem: HTMLInputElement) => {
    if (formSubmitted) {
      setErrorMsg(elem.validationMessage);
    }
  }, [formSubmitted]);

  const handleValidation = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
    handleErrors(e.target);
    updateErrorMsg(e.target);
  };

  // When form submits, this will show errors. If any.
  useEffect(() => {
    const { current } = inputElem;
    if (current !== null) updateErrorMsg(current);
  }, [formSubmitted, updateErrorMsg]);

  return (
    <div className={className}>
      <div style={{ position: "relative" }}>
        <StyledContainer>
          <StyledLabel
          isActive={isActive}
          isDefault={userInput.length === 0}
          isValid={isValid}
          htmlFor={text}
          >
            {text}
          </StyledLabel>
          <StyledInput
            onChange={(e) => handleValidation(e)}
            onFocus={() => setIsActive(true)}
            onBlur={() => userInput.length === 0 && setIsActive(false)}
            isDefault={userInput.length === 0}
            isValid={isValid}
            type={inputType}
            required={isRequired}
            id={text}
            name={text}
            ref={inputElem}
          />
        </StyledContainer>
        <StyledBorder isActive={isActive} isDefault={userInput.length === 0} isValid={isValid} />
      </div>
      <StyledErrorMsg visible={formSubmitted}>{errorMsg}</StyledErrorMsg>
    </div>
  );
};

const StyledInputCont = styled(InputCont)`
  position: relative;
`;

export default StyledInputCont;
