import React, { useEffect } from 'react';

function useOnOutsideClick(
  element:  React.RefObject<HTMLElement>,
  onOutsideClick: () => void,
) {
  useEffect(() => {
    function handleOutsideClick(event: MouseEvent) {
      if (
        element.current &&
        !element.current.contains(event.target as Node)
      ) {
        onOutsideClick();
      }
    }

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [element, onOutsideClick]);
}

export default useOnOutsideClick;