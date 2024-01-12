export default function Container({ children }) {
  return (
    <div className="2xl:container mx-auto px-4 xl:px-8 space-y-8 w-full py-12 lg:py-20">
      {children}
    </div>
  );
}
