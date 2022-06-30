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

  const checkValidity = (val:string, isValid:boolean) => {
    if (val.length === 0) return false;
    const validationResult = errorHandler(val, isValid);
    return validationResult;
  };

  const handleErrors = useCallback((elem: HTMLTextAreaElement) => {
    if (formSubmitted) {
      setErrorMsg(elem.validationMessage)
    }
  }, [formSubmitted]);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setUserInput(e.target.value);
    const valid = checkValidity(e.target.value, e.target.checkValidity());
    valid ? setIsValid(true) : setIsValid(false);
    handleErrors(e.target);
  };

  // When form submits, this will show errors. If any.
  useEffect(() => {
    const { current } = textAreaElem;
    if (current !== null) handleErrors(current);
  }, [formSubmitted, handleErrors]);

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
            onChange={(e) => handleChange(e)}
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
