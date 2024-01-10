import Button from "./ui/buttons";
import Container from "./ui/container";
import Link from "next/link";
import Image from "next/image";

export default function Footer({ menuData }) {
  const currentYear = new Date().getFullYear();

  const footerMenu = menuData;
  return (
    <footer>
      <div className="bg-gray-900">
        <Container>
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
