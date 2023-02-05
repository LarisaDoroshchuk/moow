import React from 'react';
import Header from '../../components/header/Header';
import MissionBlock from '../../components/missionBlock/MissionBlock';
import TopBestBlock from '../../components/topBestBlock/TopBestBlock';
// import MapBlock from '../../components/mapBlock/MapBlock';
import VideoBlock from '../../components/videoBlock/VideoBlock';
import LastQuestions from '../../components/lastQuestions/LastQuestions';
import DownloadApplication from '../../components/downloadApplication/DownloadApplication';
import Footer from '../../components/footer/Footer';

function Team() {
    return (
        <>
            <Header />
            <main>
                <MissionBlock />
                <VideoBlock />
                <TopBestBlock />
                {/* <MapBlock /> */}
                <DownloadApplication />
                <LastQuestions />
            </main>
            <Footer />
        </>
    );
}
export default Team;