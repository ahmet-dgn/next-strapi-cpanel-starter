export default function Title({ children, titleDesc }) {
  return (
    <div>
      <h3 className="text-h4 lg:text-h3 text-center mb-4 text-ba text-on-background-color ">
        {children}
      </h3>
      {titleDesc && (
        <p className="text-small-regular lg:text-normal-regular  text-on-background-color text-center max-w-xl mx-auto">
          {titleDesc}
        </p>
      )}
    </div>
  );
}
