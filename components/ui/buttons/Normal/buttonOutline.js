import Link from "next/link";
export default function ButtonOutline({ children, href }) {
  return (
    <Link
      href={href}
      className="flex items-center justify-center w-fit h-10 px-4 text-link-normal rounded bg-transparent text-primary-color border-2 border-primary-color hover:bg-primary-color/20 "
    >
      {children}
    </Link>
  );
}
