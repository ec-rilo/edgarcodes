import React, { useState, useEffect, useRef, useCallback, ChangeEvent } from 'react';
import styled from 'styled-components';

// Components
import {
  StyledLabel,
  StyledBorder,
  StyledTextArea,
} from '../LandingPage/ElementComponents';
import StyledErrorMsg from './ErrorMsg';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 200px;
`;

interface MessageContProps {
  readonly className?: string;
  readonly text: string;
  readonly isRequired?: boolean;
  readonly errorHandler: Function;
  readonly formSubmitted: boolean;
}

const MessageCont = ({
  className, text, isRequired, errorHandler, formSubmitted,
}: MessageContProps) => {
  const [userInput, setUserInput] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const textAreaElem = useRef<HTMLTextAreaElement>(null);

  const handleErrors = (elem: HTMLTextAreaElement) => {
    elem.setCustomValidity('');
    const errorText = errorHandler(elem.value, elem.validationMessage);
    errorText ? setIsValid(false) : setIsValid(true);
    elem.setCustomValidity(errorText);
  };

  const updateErrorMsg = useCallback((elem: HTMLTextAreaElement) => {
    if (formSubmitted) {
      setErrorMsg(elem.validationMessage);
    }
  }, [formSubmitted]);

  const handleValidation = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setUserInput(e.target.value);
    handleErrors(e.target);
    updateErrorMsg(e.target);
  };

  // When form submits, this will show errors. If any.
  useEffect(() => {
    const { current } = textAreaElem;
    if (current !== null) updateErrorMsg(current);
  }, [formSubmitted, updateErrorMsg]);

  return (
    <div className={className}>
      <div style={{ position: "relative" }}>
        <StyledContainer>
          <div style={{ position: "absolute", height: "30px", width: "100%" }}>
            <StyledLabel
              isActive={isActive}
              isDefault={userInput.length === 0}
              isValid={isValid}
              htmlFor={text}
            >
              {text}
            </StyledLabel>
          </div>

          <StyledTextArea
            onChange={(e) => handleValidation(e)}
            onFocus={() => setIsActive(true)}
            onBlur={() => userInput.length === 0 && setIsActive(false)}
            isDefault={userInput.length === 0}
            isValid={isValid}
            required={isRequired}
            id={text}
            name={text}
            ref={textAreaElem}
          />
        </StyledContainer>
        <StyledBorder isActive={isActive} isDefault={userInput.length === 0} isValid={isValid} />
      </div>
      <StyledErrorMsg visible={formSubmitted}>{errorMsg}</StyledErrorMsg>
    </div>
  );
};

const StyledMessageCont = styled(MessageCont)`
  position: relative;
`;

export default StyledMessageCont;
