const Button = ({ name, onClick, className, type }) => {
  return (
    <button type={type} onClick={onClick} className={className}>
      {name}
    </button>
  );
};
export default Button;
