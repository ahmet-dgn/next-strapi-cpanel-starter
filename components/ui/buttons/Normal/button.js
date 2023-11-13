import Link from "next/link";
export default function Button({ children, href }) {
  return (
    <Link
      href={href}
      className="flex items-center justify-center w-fit h-10 px-4 text-link-normal rounded bg-primary-color text-on-primary-color hover:bg-primary-color/80 "
    >
      {children}
    </Link>
  );
}
