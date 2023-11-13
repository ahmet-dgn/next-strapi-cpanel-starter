import Link from "next/link";
export default function ButtonSmall({ children, href }) {
  return (
    <Link
      href={href}
      className="flex items-center justify-center rounded w-fit h-8 px-3 text-link-small bg-primary-color text-on-primary-color hover:bg-primary-color/80"
    >
      {children}
    </Link>
  );
}
