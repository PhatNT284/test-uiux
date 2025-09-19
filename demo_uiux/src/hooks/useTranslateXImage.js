import { useEffect, useState } from "react";
import useScrollHandling from "@/hooks/useScrollHandling";

const useTranslateXImage = () => {
  const { scrollPosition, scrollDirection } = useScrollHandling();
  const [translateXPosition, setTranslateXPosition] = useState(5);

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
    handleTranslateXPosition();
  }, [scrollPosition]);

  return {
    translateXPosition,
  };
};

export default useTranslateXImage;
