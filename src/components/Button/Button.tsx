import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import ButtonStyled from "./ButtonStyled";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

interface ButtonProps {
  className: string;
  text: string;
  icon?: string;
  actionOnClick: () => void;
  type: "submit" | "button";
}

library.add(faAngleRight);

const Button = ({
  actionOnClick,
  className,
  text,
  type,
}: ButtonProps): JSX.Element => {
  return (
    <ButtonStyled type={type} onClick={actionOnClick} className={className}>
      {text}
      <FontAwesomeIcon icon={"angle-right"} />
    </ButtonStyled>
  );
};

export default Button;
