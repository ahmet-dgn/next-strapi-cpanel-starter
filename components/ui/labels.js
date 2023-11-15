export function Label({ children }) {
  return (
    <span className="text-link-tiny w-fit h-fit rounded-sm px-1 bg-primary-color text-on-primary-color">
      {children}
    </span>
  );
}

export function LabelBig({ children }) {
  return (
    <span className="text-link-normal w-fit h-fit rounded-sm py-1 px-2 bg-primary-color text-on-primary-color">
      {children}
    </span>
  );
}
