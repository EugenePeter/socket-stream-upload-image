import styled from 'styled-components';
import { NavLink } from "react-router-dom";

export const mainColorGreen = "#3BC453";

export const NavContainer = styled.div`
    background-color: #fff;
    width: 100%;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const LinkWrapper = styled.div`
    background-color: #fff;
    width: 70%;
    height: 3rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
        width: 90%;
    box-sizing: border-box;
  
    @media screen and (min-width: 992px) {
      max-width: 50rem;
    }
`;

export const TabsWrapper = styled.div`
    background-color: #fff;
    width: 70%;
    height: 3rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
        width: 90%;
    box-sizing: border-box;
  
    @media screen and (min-width: 992px) {
      max-width: 50rem;
    }
`;


export const StyledLink = styled(NavLink)`
    text-decoration: none;

    display: flex;
    justify-content: center;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0;
    width: 33.33%;
    height: 3rem;
    align-items: center;
    padding: 0.5rem;
    color: ${mainColorGreen};

    &.active {
        background-color: ${mainColorGreen};
        color: #fff;
    }
`;

export const CustomBTm  = styled.button`
    width: 100%;
`;