import { useState, useEffect, useRef, type RefObject} from "react";

type IntersectionObserverTypes = [RefObject<HTMLElement | null> , boolean, boolean];

const useIntersectionObserver = () => {
  const [isVisible, setIsVisible] = useState(false);
  // used to track if item was at some point on the screen
  const [wasVisible, setWasVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      setIsVisible(entries[0].isIntersecting);
      setWasVisible(prev => prev ? prev : entries[0].isIntersecting);
    };

    const observer = new IntersectionObserver(handleIntersect, { threshold: 0.01 });

    if (ref?.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [ref]);

  return [ref, isVisible, wasVisible] as IntersectionObserverTypes;
};

export default useIntersectionObserver;
