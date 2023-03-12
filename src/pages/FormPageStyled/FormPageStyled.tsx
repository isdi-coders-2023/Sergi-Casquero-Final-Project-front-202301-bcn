import styled from "styled-components";

const FormPageStyled = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;

  .login-page,
  .register-page {
    &__title {
      color: ${(props) => props.theme.colors.secondaryColor};
      font-size: ${(props) => props.theme.fontSizes.bigTitleFontSize};
      font-weight: 400;
      margin-bottom: 40px;
    }
  }
`;

export default FormPageStyled;
