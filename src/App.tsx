import { createBrowserRouter, Route, RouterProvider, Routes } from "react-router";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import Nav from "./components/Nav.tsx";
import Home from "./components/mains/Home.tsx";
import Education from "./components/mains/Education.tsx";
import Experiences from "./components/mains/Experiences.tsx";
import Skills from "./components/mains/Skills.tsx";
import Projects from "./components/mains/Projects.tsx";
import Certifications from "./components/mains/Certifications.tsx";
import styled from "styled-components";

const StyledPageWrapper = styled.div `
    max-width: 85%;
    margin: auto;
    @media screen and (max-width: 1000px) {
        width: 85vw;
        margin: auto;
    }
`

const StyledContainer = styled.div `
    display: flex;
    flex-direction: row;
    @media screen and (max-width: 1000px) {
        width: 85vw;
        display: inline;
        justify-content: center;
    }
`

function Root() {
    return (
        <StyledPageWrapper>
            <Header/>
            <StyledContainer>
                <Nav/>
                <Routes>
                    <Route
                        path={`/`}
                        element={<Home/>}
                    />
                    <Route
                        path={`education.html`}
                        element={<Education/>}
                    />
                    <Route
                        path={`experiences.html`}
                        element={<Experiences/>}
                    />
                    <Route
                        path={`projects.html`}
                        element={<Projects/>}
                    />
                    <Route
                        path={`skills.html`}
                        element={<Skills/>}
                    />
                    <Route
                        path={`certifications.html`}
                        element={<Certifications/>}
                    />
                </Routes>
            </StyledContainer>
            <Footer/>
        </StyledPageWrapper>
    );
}


const router = createBrowserRouter (
    [{path:"*", Component:Root}]
)


export default function App() {
  return (
      <>
          <RouterProvider router={router} />
      </>
  )
}