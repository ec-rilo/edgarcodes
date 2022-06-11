import Image from 'next/image';
import styled from 'styled-components';

// Assets
import arrowHeadSrc from '../../public/images/right-arrow-head.svg';

const StyledArrowBody = styled.div`
  background-color: var(--clr-gainsboro);
  height: 1px;
  width: 100px;
`;

interface RightArrowProps {
  readonly className?: string;
}

const RightArrow = ({ className }: RightArrowProps) => {
  return (
    <div className={className}>
      <StyledArrowBody />
      <div style={{ position: 'relative', right: '15px', top: '.5px' }}>
        <Image src={arrowHeadSrc} alt="" height={20} width={20} />
      </div>
    </div>
  );
};

const StyledRightArrow = styled(RightArrow)`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export default StyledRightArrow;
