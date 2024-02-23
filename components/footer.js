import Button from "./ui/buttons";
import Container from "./ui/container";
import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";

export default function Footer({ menuData, generalSettings, t }) {
  const currentYear = new Date().getFullYear();

  const footerMenu = menuData;

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Kullanıcı sayfayı aşağı kaydırdığında göster/ gizle
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Event listener'ı temizleme
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    // Sayfanın başına yukarı kaydırma
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer>
      <button
        onClick={scrollToTop}
        className={`fixed bottom-4 right-4 p-2 bg-black text-white rounded-full transition-opacity ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22ZM11 12V16H13V12H16L12 8L8 12H11Z"
            fill="white"
          />
        </svg>
      </button>
      <div className="bg-gray-900">
        <Container>
          <div className="flex justify-center">
            <Image
              className="object-contain  my-4 width max-w-[150px] lg:max-w-[200px]"
              src={
                process.env.NEXT_PUBLIC_DATA_URL +
                  generalSettings?.BeyazLogo?.data?.attributes?.url || " "
              }
              width={200}
              height={50}
              alt="logo"
            />
          </div>

          <ul className="text-link-small pt-4  lg:pt-0 lg:pl-0 flex justify-center flex-wrap ">
            {footerMenu
              .filter((menuItem) => !menuItem.parent)
              .map((menu) => (
                <li className="px-4" key={menu.id}>
                  <Button href={menu.path} size="sm" type="link" color="white">
                    {menu.title}
                  </Button>
                </li>
              ))}
          </ul>

          <p className="text-gray-200 text-center text-tiny-regular">
            © {currentYear} Your Company, Inc. All rights reserved.
          </p>
        </Container>
      </div>
      <div className="p-4 flex justify-center text-center">
        <Link
          target="_blank"
          href="https://medicom.net.tr/"
          className="text-[12px] font-medium"
          passHref
        >
          {" "}
          Bu site
          <Image
            src="/medicom-logo.svg"
            width={125}
            height={50}
            className="inline-block mx-4"
            alt="Medicom Yazılım"
          />
          tarafından hazırlanmıştır.
        </Link>
      </div>
    </footer>
  );
}
