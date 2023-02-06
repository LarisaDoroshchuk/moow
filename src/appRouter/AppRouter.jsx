import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from '../pages/Main/Main';
import About from '../pages/About/About';
import Team from '../pages/Team/Team';
import FAQ from '../pages/FAQ/FAQ';


function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<Team />} />
            <Route path="/faq" element={<FAQ />} />
        </Routes>
    );
}

export default AppRouter;