const Section = ({ children, id }) => (
  <section
    id={id}
    className="flex items-center justify-center w-full h-full py-12"
  >
    {children}
  </section>
);

export default Section;
