const Wrapper = ({ children }) => (
  <div className="container flex flex-col items-start justify-between gap-10 px-6 py-6 mx-auto md:flex-row sm:px-16">
    {children}
  </div>
);

export default Wrapper;
