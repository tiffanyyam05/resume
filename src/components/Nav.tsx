import { Link } from "react-router";
import styled from "styled-components";

const StyledNav = styled.nav `
    width: 30%;
    background-color: lavenderblush;
    @media screen and (max-width: 1000px) {
        width: 100%;
        padding: 2% 0;
    }
`

const StyledNavUl = styled.ul `
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 5% 0 0;
    list-style: none;
    @media screen and (max-width: 1000px){
        flex-direction: row;
    }
`

const StyledNavLi = styled.li `
    width: 80%;
    margin-top: 50px;
    padding: 10px 3%;
    text-align: center;
    @media screen and (max-width: 1000px) {
        width: 15%;
        margin: 1%;
        padding: 0 1%;
    }
`

const StyledLink = styled(Link) `
    text-decoration: none;
    font-size: calc(7px + 1vw);
    font-weight: bold;
    color: #704cff;
    padding: 8% 10%;
    background-color: lavender;
    
    @media screen and (max-width: 1000px) {
        font-size: calc(5px + 1vw);
    }
`

export default function Nav() {
    return(
        <StyledNav>
            <StyledNavUl>
                <StyledNavLi><StyledLink to="/">Home</StyledLink></StyledNavLi>
                <StyledNavLi><StyledLink to="/education.html">Education</StyledLink></StyledNavLi>
                <StyledNavLi><StyledLink to="/experiences.html">Experiences</StyledLink></StyledNavLi>
                <StyledNavLi><StyledLink to="/projects.html">Projects</StyledLink></StyledNavLi>
                <StyledNavLi><StyledLink to="/skills.html">Skills</StyledLink></StyledNavLi>
                <StyledNavLi><StyledLink to="/certifications.html">Certifications</StyledLink></StyledNavLi>
            </StyledNavUl>
        </StyledNav>
    );
}