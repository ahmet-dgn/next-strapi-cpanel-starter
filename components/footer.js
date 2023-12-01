import Button from "./ui/buttons";
import Container from "./ui/container";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerMenu = [
    {
      name: "Anasayfa",
      href: "/",
    },
    {
      name: "Hakkımızda",
      href: "https://localhost:3000/hakkimizda/",
    },
    {
      name: "Yayınlarımız",
      href: "/",
      children: [
        {
          name: "Kitap - 1",
          href: "/",
        },
        {
          name: "Kitap - 2",
          href: "/",
        },
      ],
    },
    {
      name: "İletişim",
      href: "/",
    },
    {
      name: "Ürünlerimiz",
      href: "https://localhost:3000/urunlerimiz/",
    },
    {
      name: "About Us",
      href: "https://localhost:3000/en/about-us/",
    },
  ];
  return (
    <footer>
      <div className="bg-gray-900">
        <Container>
          <ul className="text-link-small pt-4  lg:pt-0 lg:pl-0 flex justify-center flex-wrap ">
            {footerMenu.map((menu) => (
              <li className="px-4">
                <Button href={menu.href} size="sm" type="link" color="white">
                  {menu.name}
                </Button>
              </li>
            ))}
          </ul>
          <div className="flex justify-center space-x-8">
            <Link href="#">
              <Image src="/icons/youtube.svg" width={34.12} height={24} />
            </Link>
            <Link href="#">
              <Image src="/icons/x.svg" width={29.55} height={24} />
            </Link>
            <Link href="#">
              <Image src="/icons/instagram.svg" width={24} height={24} />
            </Link>
            <Link href="#">
              <Image src="/icons/facebook.svg" width={24} height={24} />
            </Link>
          </div>
          <p className="text-gray-500 text-center text-tiny-regular">
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
          />
          tarafından hazırlanmıştır.
        </Link>
      </div>
    </footer>
  );
}
