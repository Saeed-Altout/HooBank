const Button = ({ text, styles }) => (
  <button
    type="button"
    className={`${styles} p-3 my-5 text-lg font-semibold rounded-lg bg-blue-gradient`}
  >
    {text}
  </button>
);

export default Button;
