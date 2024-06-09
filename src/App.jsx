import { useState } from "react";

import "./App.css";

import {
    createBrowserRouter,
    // createRoutesFromElements,
    RouterProvider,
    BrowserRouter,
    Route,
    Routes,
} from "react-router-dom";
import Layout from "./pages/layout";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import SkillsPage from "./pages/skills";
import WorksPage from "./pages/works";
import ErrorPage from "./pages/error";
import CvPage from "./pages/cv";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<AboutPage />} />
                    <Route path="contacts" element={<ContactPage />} />
                    <Route path="skills" element={<SkillsPage />} />
                    <Route path="works" element={<WorksPage />} />
                    <Route path="about" element={<AboutPage />} />
                    <Route path="cv" element={<CvPage />} />
                    <Route path="*" element={<Layout />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
