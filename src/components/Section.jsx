const Section = ({ children, id }) => (
  <section
    id={id}
    className="flex items-start justify-center w-full h-full my-12"
  >
    {children}
  </section>
);

export default Section;
