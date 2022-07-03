import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.3rem 2rem;
  background-color: #f5f5f5;
  border-bottom: 2px solid #dbdbdb;

  img {
    width: 3.125rem;
    height: 3.125rem;
    border-radius: 3px;
  }

  .Header-cart-icon {
    position: relative;
  }
  .Header-quantity {
    font-size: 0.75rem;
    font-weight: 500;
    background-color: white;
    width: 0.9rem;
    height: 0.9rem;
    border-radius: 50%;
    position: absolute;
    top: 0.35rem;
    right: 0.55rem;
  }
`;
