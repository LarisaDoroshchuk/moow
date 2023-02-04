import React, { } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import './MapBlock.scss';

const MapBlock = () => {

    return (
        <div className="mapBlock_container">

            <section className="mapBlock">
                <h6 className="mapBlock-title">Наведіть на потрібну область, щоб побачити дані</h6>

                <div className="map-wrap">
                    <HelmetProvider>
                        <Helmet>
                            <script src="/js/mapdata.js"></script>
                            <script src="/js/countrymap.js"></script>
                        </Helmet>
                        <div id="map"></div>
                    </HelmetProvider>
                </div>

                <a className="mapBlock-link" href="!#">Більше статистики від MOOW</a>
            </section>

        </div>
    )
}

export default MapBlock