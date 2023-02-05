import React, { } from 'react';
// import { Link } from 'react-router-dom';
import './StatisticsBlock.scss';


const StatisticsBlock = () => {

    return (
        <div className="statisticsBlock_container">
            <h3 className="statisticsBlock_title">Наша статистика показує</h3>
            <h4 className="statisticsBlock_text">Збір урожаю соняшнику на 01 грудня 2021р.
                Топ-5 областей</h4>
            <p className="statisticsBlock_content">Дані наведено без урахування тимчасово окупованої території Автономної Республіки Крим, м. Севастополя та частини тимчасово окупованих територій у Донецькій та Луганській областях</p>
        </div>
    )

}

export default StatisticsBlock
