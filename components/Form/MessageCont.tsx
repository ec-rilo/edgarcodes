import React, { useState, useEffect, useRef } from 'react';
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
  readonly inputHandler: Function;
  readonly formSubmitted: boolean;
}

const MessageCont = ({
  className, text, isRequired, inputHandler, formSubmitted,
}: MessageContProps) => {
  const [userInput, setUserInput] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [isDefault, setIsDefault] = useState(true);
  const [isValid, setIsValid] = useState(false);
  const [builtInValidity, setBuiltInValidity] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const textAreaElem = useRef(null);

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
    if (textAreaElem !== null && formSubmitted) {
      setErrorMsg(textAreaElem.current.validationMessage);
    }
  }, [formSubmitted, userInput]);

  return (
    <div className={className}>
       <div style={{ position: "relative" }}>
        <StyledContainer>
          <div style={{ position: "absolute", height: "30px", width: "100%" }}>
            <StyledLabel
              isActive={isActive}
              isDefault={isDefault}
              isValid={isValid}
              htmlFor={text}
              >
              {text}
            </StyledLabel>
          </div>

          <StyledTextArea
            onChange={(e) => {
              setUserInput(e.target.value);
              setBuiltInValidity(e.target.checkValidity());
            }}
            onFocus={() => setIsActive(true)}
            onBlur={() => userInput.length === 0 && setIsActive(false)}
            isDefault={isDefault}
            isValid={isValid}
            required={isRequired}
            id={text}
            name={text}
            ref={textAreaElem}
          />
        </StyledContainer>
        <StyledBorder isActive={isActive} isDefault={isDefault} isValid={isValid} />
       </div>
       <StyledErrorMsg visible={formSubmitted}>{errorMsg}</StyledErrorMsg>
    </div>
  );
};

const StyledMessageCont = styled(MessageCont)`
  position: relative;
`;

export default StyledMessageCont;
