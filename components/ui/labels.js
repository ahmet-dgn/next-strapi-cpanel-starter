export default function Label({ children, size, color }) {
  const lableSizeClass =
    size === "md "
      ? "text-link-tiny px-1 "
      : size === "lg"
      ? "text-link-normal px-2 "
      : "text-link-tiny px-1";
  const labelColorClass =
    color === "yellow"
      ? "bg-yellow-400 text-gray-900"
      : "bg-gray-300 text-gray-900";

  const labelClasName = `text-link-normal w-fit h-fit rounded-sm py-1 inline-block ${lableSizeClass} ${labelColorClass}`;
  return <span className={labelClasName}>{children}</span>;
}
