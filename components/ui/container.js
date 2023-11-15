export default function Container({ children }) {
  return (
    <div className="2xl:container mx-auto px-4 py-16 md:py-20 xl:py-24 xl:px-8 ">
      {children}
    </div>
  );
}
