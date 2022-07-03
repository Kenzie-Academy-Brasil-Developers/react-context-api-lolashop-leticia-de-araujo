import * as muiStyles from "@mui/material/styles";
import { Box, Button } from "@mui/material";

export const StyledBox = muiStyles.styled(Box)`
    height: 8rem;
    width: 100%;
    font-family: "Montserrat",sans-serif;
    display: flex;
    align-items: strech;
    justify-content: space-between;
    padding: 0 0.7rem;

    @media (max-width: 500px) {
        flex-direction: column;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-evenly;
    }
  
  
    img {
        width: 27%;
        border-radius: 0.25rem;

        @media (max-width: 500px) {
            width: 7rem;
            height: 7rem;

        }
    
    }

    .CartProductCard-name-description {
        width: 43%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        gap: 0.5rem;
        color: rgb(130, 130, 130);
        font-family: "Montserrat", sans-serif;

        @media (max-width: 500px) {
            align-items: center;
        }

        h2 {
            font-size: 1rem;
            color: rgb(51, 51, 51);
            font-weight: bold;
            text-align: start;

            @media (max-width: 500px) {
                font-size: 0.8rem;
                text-align: center;
                width: 6.25rem;
            }

        }
      
        p {
            font-size: 0.85rem;
            height: 4.25rem;
            display: inline-flex;
            align-items: center;
            text-align: start;

            @media (max-width: 500px) {
               display: none;
            }   
          
        }
    
    
    }

    .CartProductCard-price-remove-qtd{
        width: 8rem;
        height: 90%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.7rem;

        @media (max-width: 800px) {
            gap: 0;
            justify-content: space-evenly;
            
        }

        @media (max-width: 500px) {
            width: 4rem;
            height: 70%;
            gap: 0;
            justify-content: space-evenly;
            
        }

        
        .price {
            color: #fe6d73;
            font-weight: 500;
            font-size: 0.9rem;
            
        }

        .quantity {
            color:  rgb(130, 130, 130);
            font-weight: 500;
            font-size: 0.9rem;
        }
    }

 
    
`;

export const StyledButton = muiStyles.styled(Button)`
    font-size: 0.7rem;

    @media (max-width: 500px) {
        font-size: 0.6rem;
        padding: 2px;
        width: 7rem;
    }

`;
