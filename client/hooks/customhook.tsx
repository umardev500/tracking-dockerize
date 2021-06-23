import { Dispatch, MutableRefObject, SetStateAction, useEffect, useRef, useState } from 'react';

// show hide components with outside click
export const useComponentVisible = (initialState: boolean): { ref: MutableRefObject<any>; isVisible: boolean; setVisible: Dispatch<SetStateAction<boolean>> } => {
  const [isVisible, setVisible] = useState(initialState);
  const ref = useRef<any>(null);

  const handleOutsideClick = (e: any): void => {
    if (ref.current && ref.current.contains(e.target)) {
      setVisible(!isVisible);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick, true);

    return () => {
      document.removeEventListener('click', handleOutsideClick, true);
    };
  }, [isVisible]);

  return { ref, isVisible, setVisible };
};
