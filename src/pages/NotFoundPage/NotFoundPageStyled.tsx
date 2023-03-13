import styled from "styled-components";

const NotFoundPageStyled = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.backgroundColor};
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export default NotFoundPageStyled;
