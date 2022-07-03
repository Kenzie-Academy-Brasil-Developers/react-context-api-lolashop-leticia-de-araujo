// import styled from "styled-components";
import * as muiStyles from "@mui/material/styles";
import { Button, Paper } from "@mui/material";

export const StyledPaper = muiStyles.styled(Paper)`
    width: 15rem;
    border-radius: 0.25rem;
    font-family: "Montserrat", sans-serif;
  
    img {
        width: 100%;
        border-radius: 0.25rem;
    }

    h2 {
            font-size: 1rem;
            color: rgb(51, 51, 51);
            font-weight: bold;
            text-align: start;
            margin-top: 0.6rem;
            padding-left: 1rem;

            @media(max-width: 800px) {
                padding: 0;
                text-align: center;
            }
        }

    .ProductCard-content {
        height: 14rem;
        padding: 0.5rem 1rem 0.6rem 1rem;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        gap: 0.9rem;
        color: rgb(130, 130, 130);
        font-family: "Montserrat", sans-serif;

        @media(max-width: 800px) {
            justify-content: space-evenly;
            gap: 0; 
            height: 14rem;
            padding-bottom: 0;
        }
      
        p {
            font-size: 0.85rem;
            height: 4.25rem;
            display: inline-flex;
            align-items: center;
            text-align: start;

            @media(max-width: 800px) {
                height: auto;
            }
          
        }
      
        .category {
            background-color: #fe6d73;
            padding: 0.1rem 0.3rem;
            border-radius: 0.2rem;
            color: white;
            font-size: 0.8rem;
        }

        .price {
            color: #fe6d73;
            font-size: 0.9rem;
            
        }
    }
`;

export const StyledButton = muiStyles.styled(Button)`
    width: 100%;
    color: white;
   

    @media(max-width: 800px) {
           padding: 3px;
           font-size: 0.75rem;
        }

`;
