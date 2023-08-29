const CardState = ({ state, text }) => (
  <p className={`font-bold text-white`}>
    <span className="text-3xl">{state}</span>{" "}
    <span className="text-xl text-gradient">{text}</span>
  </p>
);

export default CardState;
