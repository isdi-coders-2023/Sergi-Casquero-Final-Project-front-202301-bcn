interface ButtonProps {
  className: string;
  content: string;
}

const Button = ({ className, content }: ButtonProps): JSX.Element => {
  return <button className={className}>{content}</button>;
};

export default Button;
