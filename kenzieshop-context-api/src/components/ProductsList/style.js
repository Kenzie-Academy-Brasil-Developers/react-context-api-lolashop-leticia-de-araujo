import styled from "styled-components";

export const StyledMain = styled.main`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  padding: 2rem;
  width: 80%;

  @media (max-width: 800px) {
    width: 95%;
    padding: 2rem 0.3rem;
  }
`;
