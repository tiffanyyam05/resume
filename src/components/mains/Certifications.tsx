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

const StyledImg = styled.img `
    max-width: 30vw;
    @media screen and (max-width: 1000px) {
        display: block;
        margin: 0 auto 5% auto;
    }
`

const StyledP = styled.p `
    font-size: calc(6px + 1vw);
`

export default function Certifications() {
    return (
        <StyledMain>
            <StyledMainH2>Certifications</StyledMainH2>
            <StyledImg id="cert" className="photo" src="/certificate.jpg"
                 alt="Certificate of achievement for CodePath Intro to Web Development"/>
            <StyledP id="certs-desc">
                CodePath is an organization that offers free online computer science courses. During the fall semester
                of 2025, I took CodePath's Intro to Web Development course. The course was 10 weeks long and 2 hours
                every week, and the workload was about 2 hours every week. I learned the basics of HTML, CSS, and
                JavaScript, flexbox, animation, and many more important web development skills. I have noticed that
                a lot of the material I learned in this course has been used in CS 391.
                <br/><br/>This spring 2026 semester, I will be taking another
                CodePath course: TIP 102 (technical interview prep).
            </StyledP>
        </StyledMain>
    );
}