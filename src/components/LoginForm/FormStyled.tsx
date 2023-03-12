import styled from "styled-components";

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: ${(props) => props.theme.sizes.mobileWidth};

  .login-form,
  .register-form {
    &__field {
      color: ${(props) => props.theme.colors.secondaryColor};
      font-size: ${(props) => props.theme.fontSizes.biggerFontSize};
      width: 100%;
      height: ${(props) => props.theme.sizes.inputHeight};
      background-color: transparent;
      outline: none;
      border: none;
      border-bottom: 1px solid #fff;
      padding-left: ${(props) => props.theme.distances.inputLeftPadding};
    }

    &__error {
      color: ${(props) => props.theme.colors.errorColor};
      font-weight: 600;
      text-align: center;
      letter-spacing: 1px;
    }

    &__register {
      color: ${(props) => props.theme.colors.secondaryColor};
      letter-spacing: 1px;
      margin: 20px 0 80px 0;
      align-self: center;

      &-link {
        font-weight: 600;
        color: ${(props) => props.theme.colors.primaryColor};
      }
    }

    &__submit {
      align-self: flex-end;
    }
  }
`;

export default FormStyled;
