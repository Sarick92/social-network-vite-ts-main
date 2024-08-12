interface IInpitProps {
  type: string;
  placeholder: string;
}

const Input = ({ type, placeholder }: IInpitProps) => {
  return <input type={type} placeholder={placeholder} />;
};

export default Input;
