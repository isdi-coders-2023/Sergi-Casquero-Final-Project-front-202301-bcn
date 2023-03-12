import styled from "styled-components";

const HeaderStyled = styled.header`
  position: absolute;
  top: 90px;

  .logo {
    font-size: 2.3rem;
    color: ${(props) => props.theme.colors.primaryColor};
    letter-spacing: 2px;
  }
`;

export default HeaderStyled;
