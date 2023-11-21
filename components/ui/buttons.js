import Link from "next/link";

export function Button({ children, href, textColor, color, size, type }) {
  const btnSizeClass =
    size === "sm"
      ? "min-h-[2rem] px-3 text-link-small "
      : size === "md"
      ? "min-h-[2.5rem] px-4 text-link-normal"
      : size === "lg"
      ? "min-h-[3rem] px-5 text-link-big"
      : "min-h-[2.5rem] px-4 text-link-normal";

  const btnColorClass = color ? color : "primary-color";
  const textColorClass = textColor ? textColor : "text-white";
  const btnTypeClass =
    type === "solid"
      ? `bg-${btnColorClass} ${textColorClass} hover:bg-${btnColorClass}/60`
      : type === "outline"
      ? `text-${btnColorClass} border-2 border-${btnColorClass} hover:bg-${btnColorClass}/20`
      : type === "link"
      ? `text-${btnColorClass} hover:text-${btnColorClass}/60 px-0`
      : `bg-${btnColorClass} ${textColorClass} hover:bg-${btnColorClass}/60`;

  const buttonClassName = `flex items-center justify-center w-fit rounded  ${btnSizeClass} ${btnTypeClass}`;
  return (
    <Link href={href} className={buttonClassName}>
      {children}
    </Link>
  );
}
