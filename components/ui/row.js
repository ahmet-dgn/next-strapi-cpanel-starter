export default function Row({ children, rowCol }) {
  const rowClassNames = `${rowCol} grid gap-4 `;
  return <div className={rowClassNames}>{children}</div>;
}
