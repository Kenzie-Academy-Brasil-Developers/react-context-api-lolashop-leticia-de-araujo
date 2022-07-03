import * as muiStyles from "@mui/material/styles";
import { Button, Paper } from "@mui/material";

export const StyledPaper = muiStyles.styled(Paper)`
    width: 25%;
    min-width: 220px;
    height: 12rem;
    display: flex;
    flex-direction: column;
    padding-bottom: 0.7rem;
    align-items: center;
    justify-content: center;

    @media (max-width: 800px) {
        width: 100%;
    }

    header {
        width: 100%;
        text-align: start;
        font-size: 1rem;
        font-weight: 500;
        color: #fe6d73;
        padding: 0.7rem;
        border-radius: 4px 4px 0 0;
        
    }

    div {
        height: 70%;
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: stretch;
        justify-content: center;
        border-top: 2px solid #fe6d73;
        gap: 0.7rem;

        p {
            color: rgb(130, 130, 130);
            font-weight: 500;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 0.7rem;
        }

    }

`;

export const StyledButton = muiStyles.styled(Button)`
    width: 92%;
    color: white;
    margin-bottom: 0.3rem;


`;
