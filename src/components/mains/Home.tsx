import styled from "styled-components";

const StyledMain = styled.main `
    background-color: lavender;
    width: 80%;
    height: 100vh;
    padding: 40px;
    @media screen and (max-width: 1000px) {
        width: 100%;
    }
`

const StyledMainH2 = styled.h2 `
    text-align: center;
    padding: 0 0 30px 0;
`

const StyledImgText = styled.div `
    display: flex;
    flex-direction: row;
    @media screen and (max-width: 1000px) {
        flex-direction: column;
    }
`

const StyledImg = styled.img `
    max-width: 25vw;
    max-height: 25vw;
    margin-right: 30px;
    @media screen and (max-width: 1000px) {
        display: block;
        margin: 0 auto 5% auto;
    }
`

const StyledP = styled.p `
    font-size: calc(6px + 1vw);
    @media screen and (max-width: 1000px) {
        margin-top: 3%;
    }
`

export default function Home() {
    return (
        <StyledMain>
            <StyledMainH2>Home</StyledMainH2>
            <StyledImgText className="img-text">
                <StyledImg id="tiffanyyam" className="photo" src="/tiffanyyam.jpg" alt="Tiffany Yam"/>
                <StyledP id="home-desc">
                    My name is Tiffany Yam, and I am a junior at Boston University majoring in computer science.
                    I'm interested in web development and game development, and I'm currently making my own Roblox game.
                    I'm looking for an internship for the summer of 2026.
                    <br/><br/>
                    On this website you can find my education, work experiences, projects, skills, and certificates.
                    <br/><br/>
                    Please feel free to contact me at tiffyam@bu.edu.
                </StyledP>
            </StyledImgText>
        </StyledMain>
    );
}