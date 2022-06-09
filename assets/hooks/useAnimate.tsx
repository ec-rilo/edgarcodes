import { useState } from 'react';
import styled from 'styled-components';

interface DataProps {
  readonly name: string;
  isActive: boolean;
};

const useAnimate = (data: DataProps[]) => {
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

export default useAnimate;