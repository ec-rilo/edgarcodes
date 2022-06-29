import React, { useState } from 'react';
import styled from 'styled-components';

// Assets
import {
  nameHandler,
  subjectHandler,
  emailHandler,
  messageHandler,
} from '../Form/formFuncs';
import viewport from '../../viewportSizes';

// Components
import {
  StyledPageTitle,
  StyledParagraph,
  StyledEmphasisWord,
} from '../LandingPage/ElementComponents';
import StyledInputCont from '../Form/Input';
import StyledMessageCont from '../Form/MessageCont';
import StyledSubmitBtn from '../Form/SubmitBtn';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 60px;
`;

const StyledFormCont = styled.div`
  flex: 1;
`;

const StyledTextCont = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  flex: 1;
`;

interface ContactFormProps {
  readonly className?: string;
};

function ContactForm ({ className }: ContactFormProps) {
  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <div className={className} id="contact">
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

      <StyledFormCont>
        <StyledForm onSubmit={(e) => e.preventDefault()} noValidate>
          <StyledInputCont
            text="Name"
            inputType="text"
            isRequired
            inputHandler={nameHandler}
            formSubmitted={formSubmitted}
          />
          <StyledInputCont
            text="Subject"
            inputType="text"
            isRequired
            inputHandler={subjectHandler}
            formSubmitted={formSubmitted}
          />
          <StyledInputCont
            text="Email Address"
            inputType="email"
            isRequired
            inputHandler={emailHandler}
            formSubmitted={formSubmitted}
          />
          <StyledMessageCont
            text="Message"
            isRequired
            inputHandler={messageHandler}
            formSubmitted={formSubmitted}
          />
          <StyledSubmitBtn onClick={() => setFormSubmitted(true)}>Submit</StyledSubmitBtn>
        </StyledForm>
      </StyledFormCont>
    </div>
  )
};

const StyledContactForm = styled(ContactForm)`
  padding: 12% 0%;
  display: flex;
  flex-direction: column;
  gap: 80px;

  @media (${viewport.xl}) {
    padding: 12% 5%;
    flex-direction: row;
  }
`;

export default StyledContactForm;
