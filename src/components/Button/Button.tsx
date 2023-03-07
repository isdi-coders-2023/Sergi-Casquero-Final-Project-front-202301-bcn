import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import ButtonStyled from "./ButtonStyled";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

interface ButtonProps {
  className: string;
  text: string;
  icon?: string;
}

library.add(faAngleRight);

const Button = ({ className, text }: ButtonProps): JSX.Element => {
  return (
    <ButtonStyled className={className}>
      {text}
      <FontAwesomeIcon icon={"angle-right"} />
    </ButtonStyled>
  );
};

export default Button;
