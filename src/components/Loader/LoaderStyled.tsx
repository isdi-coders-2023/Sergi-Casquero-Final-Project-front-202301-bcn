import styled from "styled-components";

const LoaderStyled = styled.section`
  position: fixed;
  z-index: 9999;
  display: flex;
  justify-content: center;
  top: 0;

  background-color: ${(props) => props.theme.colors.backgroundColor};
  width: 100%;
  height: 100vh;
`;

export default LoaderStyled;
