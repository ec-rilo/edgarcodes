import styled from 'styled-components';

// Assets
import viewport from '../viewportSizes';

// Components
import StyledSocialBanner from  '../components/SocialBanner/SocialBanner';
import StyledContentContainer from '../components/LandingPage/ContentCont';

const StyledContainer1 = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 30px;
  gap: 40px;

  @media (${viewport.xl}) {
    padding-top: 60px;
  }
`;

interface LandingPageProps {
  readonly className?: string;
}

function LandingPage ({ className }: LandingPageProps) {
  return (
    <div className={className}>
      <StyledContainer1>
        <StyledSocialBanner />
        <StyledContentContainer />
      </StyledContainer1>
    </div>
  )
}

const StyledLandingPage = styled(LandingPage)`
  background-color: var(--clr-onyx);
  display: flex;
  flex-direction: column;
`;

export default StyledLandingPage;
