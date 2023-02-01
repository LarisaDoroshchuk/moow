import React, { } from 'react';
// import { Link } from 'react-router-dom';
import './MapBlock.scss';

const MapBlock = () => {

    return (
        <div className="mapBlock_container">

            <section className="mapBlock">
                <h6 className="mapBlock-title">Наведіть на потрібну область, щоб побачити дані</h6>

                <div className="map-wrap">


                </div>

                <a className="mapBlock-link" href="!#">Більше статистики від MOOW</a>
            </section>

        </div>
    )
}

export default MapBlock
