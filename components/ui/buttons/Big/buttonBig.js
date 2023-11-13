import Link from "next/link";
export default function ButtonBig({ children, href }) {
  return (
    <Link
      href={href}
      className="flex items-center justify-center rounded w-fit h-11 px-5 text-link-big bg-primary-color text-on-primary-color hover:bg-primary-color/80"
    >
      {children}
    </Link>
  );
}
