import * as muiStyles from "@mui/material/styles";
import { Paper } from "@mui/material";

export const StyledPaper = muiStyles.styled(Paper)`
  display: flex;
  width: 50vw;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding-bottom: 1rem;

  @media (max-width: 860px) {
        width: 90vw;
        min-width: 220px;
    }

  header {
    background-color: #fe6d73;
    color: white;
    width: 100%;
    height: 10%;
    padding: 0.9rem;
    font-weight: 500;
    text-align: start;
    border-radius: 4px 4px 0 0;
  }

  .empty-cart {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.6rem;

    h2 {
        color: rgb(107 106 106);
        font-size: 1rem;
    }

  
  }
`;
