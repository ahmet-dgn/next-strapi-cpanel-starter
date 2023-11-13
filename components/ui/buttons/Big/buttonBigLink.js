import Link from "next/link";
export default function ButtonBigLink({ children, href }) {
  return (
    <Link
      href={href}
      className="flex items-center justify-center rounded w-fit h-11 text-link-big text-primary-color hover:text-primary-color/60 hover:fill-primary-color/60"
    >
      {children}
    </Link>
  );
}
