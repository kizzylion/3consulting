import { ComponentPropsWithRef, useCallback, useEffect, useState } from "react";

export const usePrevNextButtons = (emblaApi: any) => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevBtnClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextBtnClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi: any) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onSelect]);

  return { prevBtnDisabled, nextBtnDisabled, onPrevBtnClick, onNextBtnClick };
};

export const PrevButton = (props: ComponentPropsWithRef<"button">) => {
  const { children, ...restProps } = props;

  return (
    <button
      className="embla__button embla__button--prev btn btn-primary btn btn-primary flex items-center size-14   justify-center mr-6  border border-gray-300 rounded-full"
      type="button"
      {...restProps}
    >
      <i className="bi bi-arrow-left text-2xl text-gray-900 "></i>
      {children}
    </button>
  );
};

export const NextButton = (props: ComponentPropsWithRef<"button">) => {
  const { children, ...restProps } = props;

  return (
    <button
      className="embla__button embla__button--next btn btn-primary flex items-center size-14   justify-center mr-6  border border-gray-300 rounded-full"
      type="button"
      {...restProps}
    >
      <i className="bi bi-arrow-right text-2xl text-gray-900"></i>
      {children}
    </button>
  );
};
