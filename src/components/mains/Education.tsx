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

export default function Education() {
    return (
        <StyledMain>
            <StyledMainH2>Education</StyledMainH2>
            <StyledImgText className="img-text">
                <StyledImg id="bu" className="photo" src="/bu.jpg" alt="Boston University East Campus"/>
                <StyledP id="education-desc">
                    I am currently a junior at Boston University studying computer science. I am expected to graduate
                    March 2027.
                </StyledP>
            </StyledImgText>
            <StyledP>
                <br/>
                My current GPA is 3.63.
                <br/><br/>
                Relevant coursework: Combinatoric Structures, Geometric Algorithms, Computer Systems,
                Probability in Computing, Concepts of Programming Languages, Analysis of Algorithms,
                Foundations of Data Science, Introduction to Artificial Intelligence, Web Application Development,
                Introduction to Databases.
                <br/><br/>
            </StyledP>
        </StyledMain>
    );
}