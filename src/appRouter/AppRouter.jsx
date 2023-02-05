import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from '../pages/Main/Main';
import About from '../pages/About/About';
import Team from '../pages/Team/Team';
import Faq from '../pages/Faq/Faq';


function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<Team />} />
            <Route path="/faq" element={<Faq />} />
        </Routes>
    );
}

export default AppRouter;