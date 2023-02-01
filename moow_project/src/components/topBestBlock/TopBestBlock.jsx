import React, { } from 'react';
// import { Link } from 'react-router-dom';
import './TopBestBlock.scss';

const TopBestBlock = () => {

    return (
        <div className="topBestBlock_container">

            <section className="topBestBlock_item collectedAreasBlock">
                <h3 className="topBestBlock-title">Зібрана площа (тис. га.)</h3>

                <div className="topBestBlock-wrapLine">
                    <p className="topBestBlock-lineТumber">1</p>
                    <p className="topBestBlock-lineText">Дніпропетровська область - 599,7</p>
                </div>

                <div className="topBestBlock-wrapLine">
                    <p className="topBestBlock-lineТumber">2</p>
                    <p className="topBestBlock-lineText">Кіровоградська область - 594,6</p>
                </div>

                <div className="topBestBlock-wrapLine">
                    <p className="topBestBlock-lineТumber">3</p>
                    <p className="topBestBlock-lineText">Харківська область - 573,3 </p>
                </div>

                <div className="topBestBlock-wrapLine">
                    <p className="topBestBlock-lineТumber">4</p>
                    <p className="topBestBlock-lineText">Запорізька область - 532,5 </p>
                </div>

                <div className="topBestBlock-wrapLine">
                    <p className="topBestBlock-lineТumber">5</p>
                    <p className="topBestBlock-lineText">Миколаївська область - 495,1 </p>
                </div>

                <h3 className="topBestBlock-title titleTotal">По Україні -
                    <span className="titleTotal-accent"> 6 523,9 тис. га.</span>
                </h3>


            </section>

            <section className="topBestBlock_item collectedAreasBlock">
                <h3 className="topBestBlock-title">Обсяги виробництва (тис.ц.)</h3>

                <div className="topBestBlock-wrapLine">
                    <p className="topBestBlock-lineТumber">1</p>
                    <p className="topBestBlock-lineText">Кіровоградська область - 15903,9 </p>
                </div>

                <div className="topBestBlock-wrapLine">
                    <p className="topBestBlock-lineТumber">2</p>
                    <p className="topBestBlock-lineText">Харківська область - 14 300,9 </p>
                </div>

                <div className="topBestBlock-wrapLine">
                    <p className="topBestBlock-lineТumber">3</p>
                    <p className="topBestBlock-lineText">Дніпропетровська область - 14 032,6 </p>
                </div>

                <div className="topBestBlock-wrapLine">
                    <p className="topBestBlock-lineТumber">4</p>
                    <p className="topBestBlock-lineText">Миколаївська область - 11 237,5</p>
                </div>

                <div className="topBestBlock-wrapLine">
                    <p className="topBestBlock-lineТumber">5</p>
                    <p className="topBestBlock-lineText">Запорізька область - 10 583,8 </p>
                </div>

                <h3 className="topBestBlock-title titleTotal">По Україні -
                    <span className="titleTotal-accent"> 164 398,4 тис. ц.</span>
                </h3>


            </section>

            <section className="topBestBlock_item collectedAreasBlock">
                <h3 className="topBestBlock-title">Урожайність (ц. за 1 га. зібраної площі)</h3>

                <div className="topBestBlock-wrapLine">
                    <p className="topBestBlock-lineТumber">1</p>
                    <p className="topBestBlock-lineText">Тернопільська область - 34,3</p>
                </div>

                <div className="topBestBlock-wrapLine">
                    <p className="topBestBlock-lineТumber">2</p>
                    <p className="topBestBlock-lineText">Вінницька область - 33,1</p>
                </div>

                <div className="topBestBlock-wrapLine">
                    <p className="topBestBlock-lineТumber">3</p>
                    <p className="topBestBlock-lineText">Черкаська область - 32,5</p>
                </div>

                <div className="topBestBlock-wrapLine">
                    <p className="topBestBlock-lineТumber">4</p>
                    <p className="topBestBlock-lineText">Хмельницька область - 32,1</p>
                </div>

                <div className="topBestBlock-wrapLine">
                    <p className="topBestBlock-lineТumber">5</p>
                    <p className="topBestBlock-lineText">Київська область - 31,2</p>
                </div>

                <h3 className="topBestBlock-title titleTotal">По Україні -
                    <span className="titleTotal-accent"> 25,2 ц. за 1 га. зібраної площі</span>
                </h3>
            </section>

        </div>
    )
}
export default TopBestBlock
