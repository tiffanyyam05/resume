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

const StyledP = styled.p `
    font-size: calc(6px + 1vw);
`

export default function Experiences() {
    return (
        <StyledMain>
            <StyledMainH2>Experiences</StyledMainH2>
            <StyledP id="exp-desc">
                I worked at Newton Institute from January 2023 to August 2023 and in the summer of 2024 for around
                15 hours every week.
                Newton Institute is an afterschool in Queens, New York where students learn English and math, do
                their homework, and receive tutoring.
                <br/><br/>
                There I supervised classes of fourth and sixth grade students with around 20 students in each class.
                I checked students' daily homework across multiple subjects and helped the student revise it when there
                were errors. I taught math, reading comprehension, and grammar. I managed classroom behavior and
                facilitated a positive learning environment.
                <br/><br/>
                This experience has taught me the skills of teaching, lesson planning, communication, and
                working with children.
            </StyledP>
        </StyledMain>
    );
}