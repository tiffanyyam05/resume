import styled from "styled-components";

const StyledMain = styled.main `
    background-color: lavender;
    width: 80%;
    height: 100vh;
    padding: 40px;
    @media screen and (max-width: 1000px) {
        width: 100%;
        padding-right: 10%;
    }
`

const StyledMainH2 = styled.h2 `
    text-align: center;
    padding: 0 0 30px 0;
`

const StyledSkillsDescLi = styled.div `
    margin: 40px 0;
    padding-left: 20px;
    border-left: 2px solid #704cff;
    font-size: calc(6px + 1vw);
`

export default function Skills() {
    return (
        <StyledMain>
            <StyledMainH2>Skills</StyledMainH2>
            <ul id="skills-desc">
                <StyledSkillsDescLi>
                    <strong>Programming:</strong> Proficient in Java and Python. Familiar with Typescript, JavaScript,
                    HTML, CSS, SQL, Lua, and C.
                </StyledSkillsDescLi>
                <StyledSkillsDescLi>
                    <strong>Technical skills:</strong> Problem-solving, debugging, teaching, collaboration, active
                    listening, diversity & inclusion.
                </StyledSkillsDescLi>
                <StyledSkillsDescLi>
                    <strong>Spoken languages:</strong> Proficient in Mandarin and Cantonese. Intermediate profiency in
                    Korean.
                </StyledSkillsDescLi>
                <StyledSkillsDescLi>
                    <strong>Interests & Passions:</strong> Film, arts & crafts, video games.
                </StyledSkillsDescLi>
            </ul>
        </StyledMain>
    );
}