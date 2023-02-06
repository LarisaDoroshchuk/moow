import React from 'react';
import Header from '../../components/header/Header';
import LastQuestions from '../../components/lastQuestions/LastQuestions';
import DownloadApplication from '../../components/downloadApplication/DownloadApplication';
import Footer from '../../components/footer/Footer';

function FAQ() {
    return (
        <>
            <Header />
            <main>
                <LastQuestions />
                <DownloadApplication />
            </main>
            <Footer />
        </>
    );
}
export default FAQ;