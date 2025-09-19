import { useRef, useEffect, useState } from "react";

const useTranslateX = () => {
  const [scrollDirection, setScrollDirection] = useState(null);
  const previousScrollPosition = useRef(0);

  const [translateXPosition, setTranslateXPosition] = useState(5);
  const [scrollPosition, setScrollPosition] = useState(0);

  const scrollTracking = () => {
    const currentScrollPosition = window.pageYOffset;
    if (currentScrollPosition > previousScrollPosition.current) {
      setScrollDirection("down");
    } else if (currentScrollPosition < previousScrollPosition.current) {
      setScrollDirection("up");
    }

    previousScrollPosition.current =
      currentScrollPosition <= 0 ? 0 : currentScrollPosition;

    setScrollPosition(currentScrollPosition);
  };

  const handleTranslateXPosition = () => {
    if (scrollDirection === "down" && scrollPosition >= 1596) {
      setTranslateXPosition(
        translateXPosition <= 0 ? 0 : translateXPosition - 1
      );
    } else if (scrollDirection === "up") {
      setTranslateXPosition(
        translateXPosition >= 5 ? 5 : translateXPosition + 1
      );
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollTracking);
    return () => window.removeEventListener("scroll", scrollTracking);
  }, []);

  useEffect(() => {
    handleTranslateXPosition();
  }, [scrollPosition]);

  return {
    translateXPosition,
  };
};

export default useTranslateX;
