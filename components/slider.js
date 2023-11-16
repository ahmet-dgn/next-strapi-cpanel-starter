import Image from "next/image";
import { ButtonOutline } from "@/components/ui/buttons";
import Container from "./ui/container";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Slider() {
  //##########Slider Settings#########

  const sliderSettings = {
    autoPlay: false,
    duration: 3000,
  };

  //##################################

  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    {
      url: "/beautiful-scenery-clear-white-snowy-mountains-hills.jpg",
      subtitle: "Lorem ipsum dolor sit amet",
      title: "Cras vitae euismod nisi",
      description:
        "Curabitur interdum facilisis elit feugiat faucibus. Aenean iaculis enim sapien, nec blandit augue accumsan ac. Sed elementum, nisi id volutpat blandit, libero ligula tincidunt erat, eget venenatis nibh urna vel turpis. Etiam id rhoncus arcu. Vivamus egestas pretium ullamcorper",
      button: "Kitabı İncele",
      link: "https://www.trendyol.com",
    },
    {
      url: "/beautiful-shot-famous-roman-colosseum-amphitheater-breathtaking-sky-sunrise.jpg",
      title: "Ut vulputate feugiat condimentum",
      button: "",
      link: "https://www.google.com",
    },
    {
      url: "/Library inside  0.png",
    },
  ];

  const sliderForward = (event) => {
    event.preventDefault();
    if (currentIndex >= slides.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const sliderBackward = (event) => {
    event.preventDefault();
    if (currentIndex <= 0) {
      setCurrentIndex(slides.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  //Slider Auto Play
  useEffect(() => {
    let intervalId;

    if (sliderSettings.autoPlay === true) {
      intervalId = setInterval(() => {
        if (currentIndex >= slides.length - 1) {
          setCurrentIndex(0);
        } else {
          setCurrentIndex(currentIndex + 1);
        }
      }, sliderSettings.duration);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [currentIndex, setCurrentIndex, sliderSettings.autoPlay, slides.length]);

  return (
    <div className={`w-full relative h-[550px] lg:h-[750px]`}>
      <div
        className="bg-white/20 hover:bg-black/60  transition duration-300 ease-linear p-3 absolute bottom-2/4 z-20 left-4 rounded-full cursor-pointer"
        onClick={sliderBackward}
      >
        <svg
          className="fill-white/75 "
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.0019 2.98505C16.5119 2.49505 15.7219 2.49505 15.2319 2.98505L6.92186 11.2951C6.53186 11.6851 6.53186 12.3151 6.92186 12.7051L15.2319 21.0151C15.7219 21.5051 16.5119 21.5051 17.0019 21.0151C17.4919 20.5251 17.4919 19.7351 17.0019 19.2451L9.76186 11.9951L17.0119 4.74505C17.4919 4.26505 17.4919 3.46505 17.0019 2.98505Z"
            fill="white"
          />
        </svg>
      </div>

      <div
        className=" bg-white/20 hover:bg-black/60 p-3 absolute bottom-2/4 z-20 right-4 rotate-180 rounded-full cursor-pointer"
        onClick={sliderForward}
      >
        <svg
          className="fill-white/75"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.0019 2.98505C16.5119 2.49505 15.7219 2.49505 15.2319 2.98505L6.92186 11.2951C6.53186 11.6851 6.53186 12.3151 6.92186 12.7051L15.2319 21.0151C15.7219 21.5051 16.5119 21.5051 17.0019 21.0151C17.4919 20.5251 17.4919 19.7351 17.0019 19.2451L9.76186 11.9951L17.0119 4.74505C17.4919 4.26505 17.4919 3.46505 17.0019 2.98505Z" />
        </svg>
      </div>

      {slides.map((slide, index) => (
        <div
          key={index}
          className={`w-full h-full flex items-center transition-all duration-500 ease-linear  ${
            index === currentIndex
              ? "opacity-100 visible"
              : "opacity-0 invisible"
          } absolute top-0 left-0`}
        >
          <Link
            href={slides.link || ""}
            className=" absolute top-0 left-0 w-full h-full"
          >
            <Image
              src={slide.url}
              alt={slide.title | "slider"}
              fill
              sizes="100vw"
              className=" object-cover"
            />
          </Link>

          {slide.subtitle ||
          slide.title ||
          slide.description ||
          slide.button ? (
            <Container>
              <div
                className={`relative max-w-xl flex flex-col justify-center p-8 bg-on-background-color/90 rounded h-full `}
              >
                {slide.subtitle && (
                  <p className="text-link-small mb-2 text-white">
                    {slide.subtitle}
                  </p>
                )}
                {slide.title && (
                  <h2 className="text-h3 text-white">{slide.title}</h2>
                )}
                {slide.description && (
                  <p className="mb-8 mt-4 text-white text-small-regular">
                    {slide.description}
                  </p>
                )}
                {slide.button && (
                  <ButtonOutline
                    href={slide.link || "#"}
                    passHref
                    borderColor="white"
                    textColor="white"
                  >
                    {" "}
                    {slide.button || "Devamını Oku"}{" "}
                    <svg
                      className="ml-1.5 -mr-1.5 fill-white "
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M16.1188 11.004H5.10876C4.55876 11.004 4.10876 11.454 4.10876 12.004C4.10876 12.554 4.55876 13.004 5.10876 13.004H16.1188V14.794C16.1188 15.244 16.6588 15.464 16.9688 15.144L19.7488 12.354C19.9388 12.154 19.9388 11.844 19.7488 11.644L16.9688 8.85398C16.6588 8.53398 16.1188 8.76398 16.1188 9.20398V11.004Z" />
                    </svg>
                  </ButtonOutline>
                )}
              </div>
            </Container>
          ) : null}
        </div>
      ))}
    </div>
  );
}
