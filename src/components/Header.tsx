import styled from "styled-components";

const StyledHeader = styled.header `
    background-color: #ffdae7;
    color: #704cff;
    width: 100%;
    margin: auto;
    padding-left: 40px;
    @media screen and (max-width: 1000px) {
        max-width: 85vw;
        text-align: center;
        padding: 0;
    }
`

const StyledTitle = styled.h1 `
    padding: 20px 0 5px 0;
    font-size: calc(5px + 2vw);
`

const StyledDesc = styled.h4 `
    padding: 5px 0 20px 0;
    font-size: calc(6px + 1vw);
`

export default function Header() {
    return(
        <StyledHeader>
            <StyledTitle id="title">Tiffany Yam</StyledTitle>
            <StyledDesc id="desc">My Resume</StyledDesc>
        </StyledHeader>
    );
}