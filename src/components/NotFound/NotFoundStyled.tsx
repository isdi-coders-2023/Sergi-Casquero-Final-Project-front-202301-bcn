import styled from "styled-components";

const NotFoundStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  transform: translateY(-30%);

  .not-found {
    &__message {
      color: ${(props) => props.theme.colors.secondaryColor};
      font-size: 1.6rem;
      text-align: center;
    }
  }
`;

export default NotFoundStyled;
