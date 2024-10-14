import { useState, useRef, useEffect, useCallback } from 'react';

export function useHoveredElement(delay: number = 25) {
  const [activeElement, setActiveElement] = useState<string | null>(null);
  const elementRefs = useRef<{ [key: string]: HTMLElement | null }>({});
  const timeoutRef = useRef<number | null>(null);

  const onHover = useCallback((element: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setActiveElement(element);
  }, []);

  const onLeave = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    timeoutRef.current = setTimeout(() => {
      setActiveElement(null);
    }, delay);
  }, [delay]);

  const setElementRef = useCallback(
    (name: string) => (el: HTMLElement | null) => {
      elementRefs.current[name] = el;
    },
    []
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        activeElement &&
        elementRefs.current[activeElement] &&
        !elementRefs.current[activeElement]?.contains(event.target as Node)
      ) {
        setActiveElement(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [activeElement, elementRefs]);

  return {
    activeElement,
    onHover,
    onLeave,
    setElementRef,
  };
}
