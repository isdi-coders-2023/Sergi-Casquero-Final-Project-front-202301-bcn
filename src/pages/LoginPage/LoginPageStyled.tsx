import styled from "styled-components";

const LoginPageStyled = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;

  .login-page {
    &__title {
      color: ${(props) => props.theme.colors.secondaryColor};
      font-size: ${(props) => props.theme.fontSizes.bigTitleFontSize};
      font-weight: 400;
      margin-bottom: 40px;
    }
  }
`;

export default LoginPageStyled;
