import Link from "next/link";
export default function ButtonSmallOutline({ children, href }) {
  return (
    <Link
      href={href}
      className="flex items-center justify-center w-fit h-8 px-3 text-link-small rounded bg-transparent text-primary-color border-2 border-primary-color hover:bg-primary-color/20 "
    >
      {children}
    </Link>
  );
}
