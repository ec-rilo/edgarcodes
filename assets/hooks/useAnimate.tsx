import { useState } from 'react';
import styled from 'styled-components';

const useAnimate = (data: any[]) => {
  const [content, setContent] = useState(data);

  const setOneActive = (selectedIdx: number) => {
    let contentCopy = content.map((item, index, arr) => {
      if (index !== selectedIdx) {
        item.isActive = false;
      }

      return item;
    });

    setContent(contentCopy);
  };

  const setAllActive = () => {
    let contentCopy = content.map((item, index, arr) => {
      arr[index].isActive = true;
      return item;
    })

    setContent(contentCopy);
  };

  return { setOneActive, setAllActive, content };
};

export default useAnimate;
