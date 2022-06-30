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

  const checkValidity = (val:string, isValid:boolean) => {
    if (val.length === 0) return false;
    const validationResult = errorHandler(val, isValid);
    return validationResult;
  };

  const handleErrors = useCallback((elem: HTMLInputElement) => {
    if (formSubmitted) {
      setErrorMsg(elem.validationMessage)
    }
  }, [formSubmitted]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
    const valid = checkValidity(e.target.value, e.target.checkValidity());
    valid ? setIsValid(true) : setIsValid(false);
    handleErrors(e.target);
  };

  // When form submits, this will show errors. If any.
  useEffect(() => {
    const { current } = inputElem;
    if (current !== null) handleErrors(current);
  }, [formSubmitted, handleErrors]);

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
            onChange={(e) => handleChange(e)}
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
