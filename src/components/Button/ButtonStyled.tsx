import styled from "styled-components";

const ButtonStyled = styled.button`
  width: 140px;
  height: 50px;
  border-radius: 25px;
  background-color: ${(props) => props.theme.colors.primaryColor};

  font-size: ${(props) => props.theme.fontSizes.biggerFontSize};
  font-family: inherit;
  font-weight: 600;
  padding: 0 35px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default ButtonStyled;
