import styled from "styled-components";

export const StyledMain = styled.main`
  width: 100%;
  min-height: 90vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 7vw;
  padding: 2.3rem 2rem;

  @media (max-width: 800px) {
    flex-direction: column;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    justify-content: flex-start;
  }
`;
