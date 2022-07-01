import React, { useState, FormEvent } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';

// Assets
import {
  nameHandler,
  subjectHandler,
  emailHandler,
  messageHandler,
} from '../../scripts/formFuncs';
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
  const [formSubmitted, setFormSubmitted] = useState(false); // form submit attempt

  const sendEmail = (form: HTMLFormElement) => {
    emailjs.sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
      form,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    )
      .then(() => {
        window.alert('Form submitted!');
        form.reset();
        setFormSubmitted(false);
      })
      .catch((error) => {
        window.alert('Form Failed to submit, please try again later.');
        console.log(error.text);
      });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>, form: HTMLFormElement) => {
    e.preventDefault();
    if (form.checkValidity()) sendEmail(form);
  };

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
        <StyledForm onSubmit={(e) => handleSubmit(e, e.target as HTMLFormElement)} noValidate>
          <StyledInputCont
            text="Name"
            isRequired
            inputType="text"
            errorHandler={nameHandler}
            formSubmitted={formSubmitted}
          />
          <StyledInputCont
            text="Subject"
            isRequired
            inputType="text"
            errorHandler={subjectHandler}
            formSubmitted={formSubmitted}
          />
          <StyledInputCont
            text="Email Address"
            isRequired
            inputType="email"
            errorHandler={emailHandler}
            formSubmitted={formSubmitted}
          />
          <StyledMessageCont
            isRequired
            text="Message"
            errorHandler={messageHandler}
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
