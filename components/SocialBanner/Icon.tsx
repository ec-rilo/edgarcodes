import styled from 'styled-components';

// Assets
import viewport from '../../viewportSizes';

// Components
import { StyledAnimateImg } from '../AnimateComponents';

const StyledSingleIcon = styled.div`
  display: block;
  position: relative;
  height: 30px;
  width: 30px;

  @media (${viewport.sm}) {
    height: 35px;
    width: 35px;
  }
`;

interface iconDataProps {
  readonly name: string;
  readonly isActive: boolean;
  readonly hyperLink: string;
  readonly imgSrc: string;
};

interface IconProps {
  readonly data: iconDataProps;
  readonly hoverHandlerEnter: Function;
  readonly hoverHandlerLeave: Function;
  readonly content: iconDataProps[];
  readonly index: number;
};

const Icon = ({
  data, hoverHandlerEnter, hoverHandlerLeave, content, index
}: IconProps) => {
  return (
    <StyledSingleIcon>
      <a href={data.hyperLink} target={'_blank'} rel="noopener noreferrer">
        <StyledAnimateImg
          src={data.imgSrc}
          alt={`${data.name} icon`}
          onMouseEnter={() => hoverHandlerEnter()}
          onMouseLeave={() => hoverHandlerLeave()}
          content={content}
          index={index}
          layout="fill"
        />
      </a>
    </StyledSingleIcon>
  );
};

export default Icon;