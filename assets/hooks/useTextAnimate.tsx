import { useState } from 'react';
import styled from 'styled-components';

interface ContentProps {
  readonly name: string;
  readonly isActive: boolean;
};

interface TextAnimateLiProps {
  readonly content: ContentProps[];
  readonly index: number;
};

const TextAnimateLi = styled.li`
  color: var(--clr-gainsboro);
  transition: color 0.2s;
  cursor: pointer;
  ${({ content, index }: TextAnimateLiProps) => {
    if (content[index].isActive === false) {
      return `
      color: var(--clr-gainsboro-light);
    `;
    }
  }}
`;

interface DataProps {
  readonly name: string;
  isActive: boolean;
};

const useTextAnimate = (data: DataProps[]) => {
  const [content, setContent] = useState(data);

  const setOneActive = (name: string) => {
    let contentCopy = [...content];

    contentCopy.forEach((item, index, arr) => {
      if (arr[index].name !== name) {
        arr[index].isActive = false;
      }
    });

    setContent(contentCopy);
  };

  const setAllActive = () => {
    let contentCopy = [...content];

    contentCopy.forEach((item, index, arr) => {
      arr[index].isActive = true;
    });

    setContent(contentCopy);
  };

  return { setOneActive, setAllActive, content };
};

export {
  useTextAnimate,
  TextAnimateLi,
};
