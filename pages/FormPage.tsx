import React from 'react';
import styled from 'styled-components';

// Assets
import {
  nameHandler,
} from '../components/Form/formFuncs';

// Components
import {
  StyledPageTitle,
  StyledParagraph,
  StyledEmphasisWord,
} from '../components/LandingPage/ElementComponents';
import StyledInputCont from '../components/Form/Input';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 60px;
`;

const StyledTextCont = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

interface ContactFormProps {
  readonly className?: string;
};

function ContactForm ({ className }: ContactFormProps) {
  return (
    <div className={className}>
      <div>
        <StyledTextCont>
          <StyledPageTitle noMargin>Let&apos;s Get Started!</StyledPageTitle>
          <StyledParagraph style={{ maxWidth: "500px" }}>
            If you have any questions, need a developer, or just want to connect,
            feel free to reach out to me through this {" "}
            <StyledEmphasisWord>form</StyledEmphasisWord> or directly
            through my <StyledEmphasisWord>email</StyledEmphasisWord>
            {" "} below.
          </StyledParagraph>
          <StyledEmphasisWord bold style={{ textDecoration: "underline" }}>
            ecarrillo046@gmail.com
          </StyledEmphasisWord>
        </StyledTextCont>
      </div>

      <div>
        <StyledForm>
          <StyledInputCont text="Name" inputType="text" isRequired inputHandler={nameHandler} />
          <StyledInputCont text="Subject" inputType="text" isRequired inputHandler={nameHandler} />
          <StyledInputCont text="Email Address" inputType="email" isRequired inputHandler={nameHandler} />
        </StyledForm>
      </div>
    </div>
  )
};

const StyledContactForm = styled(ContactForm)`
  padding: 12% 0%;
  display: flex;
  flex-direction: column;
  gap: 80px;
`;

export default StyledContactForm;
