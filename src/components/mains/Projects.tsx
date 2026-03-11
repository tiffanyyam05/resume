import styled from "styled-components";
import { useState } from "react";

const StyledMain = styled.main `
    background-color: lavender;
    width: 80%;
    height: 120vh;
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
    max-width: 30vw;
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

const StyledCalc = styled.div `
    border: 5px dashed #704cff;
`

const StyledInputs = styled.div `
    margin: 0 20px;
`

const StyledCalcLabel = styled.label `
    font-size: calc(6px + 1vw);
`

const StyledCalcButtonsDiv = styled.div `
    margin-top: 20px;
    margin-left: 20px;
`

const StyledButton = styled.button `
    font-size: calc(6px + 1vw);
    padding: 0 10px;
    margin: 0 5px;
    background-color: lavenderblush;
    border: 2px solid #704cff;
`

const StyledOutput = styled.h1 `
    margin-left: 20px;
    color: ${(props) => props.theme === true ? "red" : "black"};
`

export default function Projects() {

    const [input1, setInput1] = useState("");
    const [input2, setInput2] = useState("");
    const [output, setOutput] = useState(0);

    function addition() {
        setOutput(Number(input1) + Number(input2));
    }

    function subtraction() {
        setOutput(Number(input1) - Number(input2));
    }

    function multiplication() {
        setOutput(Number(input1) * Number(input2));
    }

    function division() {
        setOutput(Number(input1) / Number(input2));
    }

    function power() {
        let result = 1;
        for (let i = 0; i < Number(input2); i++) {
            result *= Number(input1);
        }
        setOutput(result);
    }

    function reset() {
        setInput1("");
        setInput2("");
        setOutput(0);
    }

    return (
        <StyledMain>
            <StyledMainH2>Projects</StyledMainH2>
            <StyledImgText className="img-text">
                <StyledImg id="library" className="photo" src="/roblox-game.png"
                     alt="The front of the library, in progress"/>
                <StyledP id="projects-desc">
                    I am currently working on a Roblox game called "The Archive," a multiplayer escape room game.
                    The main setting is a large, vintage style library where some areas are locked at first.
                    Players explore the library to find special books
                    that will transport them inside an escape room. Once completing the escape room, more parts of the
                    library will be available to the player, unlocking more escape rooms as the player progresses.
                    <br/><br/>
                    From this I learned Roblox Studio, Lua, and 3D Design.
                </StyledP>
            </StyledImgText>
            <br/><br/>

            <StyledCalc id="calc">
                <StyledMainH2>Calculator</StyledMainH2>
                <StyledInputs id="inputs">
                    <StyledCalcLabel htmlFor="first">First Number: </StyledCalcLabel>
                    <input
                        id={`first`}
                        value={input1}
                        placeholder={`Enter first number`}
                        onChange={(e)=>setInput1(e.target.value)}
                    />
                    <br/>
                    <StyledCalcLabel htmlFor="second">Second Number: </StyledCalcLabel>
                    <input
                        id={`second`}
                        value={input2}
                        placeholder={`Enter second number`}
                        onChange={(e)=>setInput2(e.target.value)}
                    />
                </StyledInputs>
                <StyledCalcButtonsDiv id="buttons">
                    <StyledButton onClick={addition}>+</StyledButton>
                    <StyledButton onClick={subtraction}>-</StyledButton>
                    <StyledButton onClick={multiplication}>*</StyledButton>
                    <StyledButton onClick={division}>/</StyledButton>
                    <StyledButton onClick={power}>**</StyledButton>
                    <StyledButton onClick={reset}>Clear</StyledButton>
                </StyledCalcButtonsDiv>
                <br/>
                <StyledOutput id="output" theme={output<0}>{output}</StyledOutput>
            </StyledCalc>
        </StyledMain>
    );
}