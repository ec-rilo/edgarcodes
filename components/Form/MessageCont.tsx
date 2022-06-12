import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Components
import {
  StyledInput,
  StyledLabel,
  StyledBorder,
  StyledTextArea,
} from '../LandingPage/ElementComponents';

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
}

const MessageCont = ({
  className, text, isRequired, inputHandler,
}: MessageContProps) => {
  const [userInput, setUserInput] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [isDefault, setIsDefault] = useState(true);
  const [isValid, setIsValid] = useState(false);
  const [builtInValidity, setBuiltInValidity] = useState(false);

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

  return (
    <div className={className}>
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
        />
      </StyledContainer>
      <StyledBorder isActive={isActive} isDefault={isDefault} isValid={isValid} />
    </div>
  );
};

const StyledMessageCont = styled(MessageCont)`
  position: relative;
`;

export default StyledMessageCont;
