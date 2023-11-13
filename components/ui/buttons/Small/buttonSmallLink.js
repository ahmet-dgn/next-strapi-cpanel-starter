import Link from "next/link";
export default function ButtonSmallLink({ children, href }) {
  return (
    <Link
      href={href}
      className="flex items-center justify-center rounded w-fit h-8 text-link-small text-primary-color hover:text-primary-color/60 "
    >
      {children}
    </Link>
  );
}
