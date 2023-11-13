import Link from "next/link";
export default function ButtonLink({ children, href }) {
  return (
    <Link
      href={href}
      className="flex items-center justify-center w-fit h-10 text-link-normal rounded text-primary-color hover:text-primary-color/60 "
    >
      {children}
    </Link>
  );
}
