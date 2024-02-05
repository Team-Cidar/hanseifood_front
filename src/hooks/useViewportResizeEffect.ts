import { RefObject, useEffect } from 'react';

export const useViewportResizeEffect = (targetRef: RefObject<HTMLDivElement>) => {
  useEffect(() => {
    const handleResize = () => {
      if (window.visualViewport && targetRef.current) {
        const currentVisualViewport = window.visualViewport.height;
        targetRef.current!.style.height = currentVisualViewport - 48 + 'px';
        window.scrollTo(0, 0);
      }
    };

    const preventScroll = () => {
      window.scrollTo(0, 0);
    };

    if (window.visualViewport) {
      window.visualViewport.onresize = handleResize;
      window.visualViewport.onscroll = preventScroll;
    }

    return () => {
      if (window.visualViewport) {
        window.visualViewport.onresize = null;
        window.visualViewport.onscroll = null;
      }
    };
  }, [targetRef]);
};
