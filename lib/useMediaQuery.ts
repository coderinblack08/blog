import { useEffect, useState } from "react";
import { useMediaQuery as useReactMediaQuery } from "react-responsive";

export const useMediaQuery = (minWidth: number) => {
  const [mounted, setMounted] = useState(false);
  const result = useReactMediaQuery({ query: `(min-width: ${minWidth}px)` });

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted ? result : false;
};
