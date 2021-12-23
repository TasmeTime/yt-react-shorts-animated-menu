import { keyframes } from "styled-components";

export const FadeOutToRight = keyframes`
    0%{
        transform: translate(0,0);
        opacity: 1;
    }
    
    100%{
        transform: translate(110%,0);
        opacity: 0;
    }
`;

export const FadeInFromRight = keyframes`
    0%{
        transform: translate(110%,0);
        opacity: 0;
    }
    
    100%{
        transform: translate(0,0);
        opacity: 1;
        
    }
`;
