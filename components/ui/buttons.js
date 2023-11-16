import Link from "next/link";
const buttonColor = "";

export function Button({ children, href }) {
  return (
    <Link
      href={href}
      className="flex items-center justify-center w-fit min-h-[2.5rem] px-4 text-link-normal rounded bg-primary-color text-on-primary-color hover:bg-primary-color/80 "
    >
      {children}
    </Link>
  );
}

export function ButtonLink({ children, href }) {
  return (
    <Link
      href={href}
      className="flex items-center justify-center w-fit min-h-[2.5rem] text-link-normal rounded text-primary-color hover:text-primary-color/60 "
    >
      {children}
    </Link>
  );
}

export function ButtonOutline({ children, href, borderColor, textColor }) {
  return (
    <Link
      href={href}
      className={`flex items-center justify-center w-fit min-h-[2.5rem] px-4 text-link-normal rounded bg-transparent border-2 border-${borderColor} text-${textColor} hover:bg-primary-color/20 `}
    >
      {children}
    </Link>
  );
}

export function ButtonBig({ children, href }) {
  return (
    <Link
      href={href}
      className="flex items-center justify-center rounded w-fit min-h-[2.75rem] px-5 text-link-big bg-primary-color text-on-primary-color hover:bg-primary-color/80"
    >
      {children}
    </Link>
  );
}

export function ButtonBigLink({ children, href }) {
  return (
    <Link
      href={href}
      className="flex items-center justify-center rounded w-fit min-h-[2.75rem] text-link-big text-primary-color hover:text-primary-color/60 hover:fill-primary-color/60"
    >
      {children}
    </Link>
  );
}

export function ButtonBigOutline({ children, href, borderColor, textColor }) {
  return (
    <Link
      href={href}
      className={`flex items-center justify-center w-fit min-h-[2.75rem] px-5 text-link-big rounded bg-transparen border-2 border-${borderColor} text-${textColor} hover:bg-primary-color/20 `}
    >
      {children}
    </Link>
  );
}

export function ButtonSmall({ children, href }) {
  return (
    <Link
      href={href}
      className="flex items-center justify-center rounded w-fit min-h-[2rem] px-3 text-link-small bg-primary-color text-on-primary-color hover:bg-primary-color/80"
    >
      {children}
    </Link>
  );
}

export function ButtonSmallLink({ children, href }) {
  return (
    <Link
      href={href}
      className="flex items-center justify-center rounded w-fit min-h-[2rem] text-link-small text-primary-color hover:text-primary-color/60 "
    >
      {children}
    </Link>
  );
}

export function ButtonSmallOutline({ children, href }) {
  return (
    <Link
      href={href}
      className="flex items-center justify-center w-fit min-h-[2rem] px-3 text-link-small rounded bg-transparent text-primary-color border-2 border-primary-color hover:bg-primary-color/20 "
    >
      {children}
    </Link>
  );
}
