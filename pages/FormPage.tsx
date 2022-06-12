import React from 'react';
import styled from 'styled-components';

// Assets

// Components
import {
  StyledPageTitle,
  StyledParagraph,
  StyledEmphasisWord
} from '../components/LandingPage/ElementComponents';

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
    </div>
  )
};

const StyledContactForm = styled(ContactForm)`
  padding: 12% 0%;
`;

export default StyledContactForm;
