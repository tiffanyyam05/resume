import { Link } from "react-router";
import styled from "styled-components";

const StyledFooter = styled.footer `
    max-width: 85vw;
    margin: auto;
    background-color: #ffdae7;
`

const StyledP = styled.p `
    font-size: calc(6px + 1vw);
`

export default function Footer() {
    return (
        <StyledFooter>
            <StyledP>All rights reserved by Tiffany Yam: <Link to="">Credits</Link></StyledP>
        </StyledFooter>
    );
}