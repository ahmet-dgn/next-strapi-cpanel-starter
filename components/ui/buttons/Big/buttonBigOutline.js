import Link from "next/link";
export default function ButtonBigOutline({ children, href }) {
  return (
    <Link
      href={href}
      className="flex items-center justify-center w-fit h-11 px-5 text-link-big rounded bg-transparent text-primary-color border-2 border-primary-color hover:bg-primary-color/20 "
    >
      {children}
    </Link>
  );
}
