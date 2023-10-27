import { useEffect } from "react";

function useOnScroll(onScroll: () => void) {
  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [onScroll]);
}

export default useOnScroll;