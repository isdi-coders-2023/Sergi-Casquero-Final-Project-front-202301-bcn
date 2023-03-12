import styled from "styled-components";

const LoaderStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  .loader-title {
    color: ${(props) => props.theme.colors.primaryColor};
    letter-spacing: 1px;
    font-size: 2.5rem;
  }
`;

export default LoaderStyled;
