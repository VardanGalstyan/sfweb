import { useEffect, useState } from "react";

type useScrollProps = {
  verticalAmount?: number;
};

export default function useScroll({
  verticalAmount = 100,
}: useScrollProps): boolean {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const handleScroll = () => {
    if (window.scrollY >= verticalAmount) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(
    () => {
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return isScrolled;
}
