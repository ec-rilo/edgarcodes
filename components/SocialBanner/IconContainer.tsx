import styled from 'styled-components';

// Assets
import viewport from '../../viewportSizes';

// Components
import Icon from './Icon';

interface iconDataProps {
  readonly name: string;
  readonly isActive: boolean;
  readonly hyperLink: string;
  readonly imgSrc: string;
};

interface iconsAnimateDataProps {
  readonly content: iconDataProps[];
  readonly setAllActive: Function;
  readonly setOneActive: Function;
};

interface IconsContProps {
  readonly className?: string;
  readonly iconsAnimateData: iconsAnimateDataProps;
};

const IconsCont = ({ className, iconsAnimateData }: IconsContProps) => {
  return (
    <div className={className}>
      {iconsAnimateData.content.map((iconData: iconDataProps, index: number) => {
        return (
          <Icon
            key={index}
            data={iconData}
            hoverHandlerEnter={() => iconsAnimateData.setOneActive(index)}
            hoverHandlerLeave={() => iconsAnimateData.setAllActive()}
            content={iconsAnimateData.content}
            index={index}
          />
        );
      })}
    </div>
  );
};

const StyledIconsCont = styled(IconsCont)<IconsContProps>`
  display: flex;
  gap: 30px;

  @media (${viewport.sm}) {
    gap: 50px;
  }
`;

export default StyledIconsCont;