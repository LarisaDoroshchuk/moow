import React from 'react';
import Header from '../../components/header/Header';
import BusinessCenterBlock from '../../components/businessCenterBlock/BusinessCenterBlock';

import DownloadApplication from '../../components/downloadApplication/DownloadApplication';
import RegistrationBlock from '../../components/registrationBlock/RegistrationBlock';
import SecurityBlock from '../../components/securityBlock/SecurityBlock';
import LastQuestions from '../../components/lastQuestions/LastQuestions';
import Footer from '../../components/footer/Footer';


function About() {
    return (
        <>
            <Header />
            <main>

                <BusinessCenterBlock />
                <DownloadApplication />
                <RegistrationBlock />
                <SecurityBlock />
                <LastQuestions />
            </main>
            <Footer />
        </>
    );
}
export default About;

