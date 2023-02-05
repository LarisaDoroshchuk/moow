import React, { } from 'react';
import '../topBlock/TopBlock.scss';
import './BusinessCenterBlock.scss';

const BusinessCenterBlock = () => {

    return (
        <div className="wrapper-TopBlock wrapper-BusinessCenterBlock" id="top-of-site-pixel-anchor">

            <div className="container-parallax">

                <h1 className="topBlock-text">Центр управління вашим бізнесом</h1>
                <h2 className="topBlock-title">Тепер контролювати весь агро-транспортний бізнес можна з одного додатку. Все від документообігу до відстеження вантажу в реальному часі доступно в декілька кліків на платформі MOOW.</h2>

                <section className="topBlock_web-block">
                    <div className="web-block">
                        <a href="!#" className="topBlock_button-link  link-web">Перейти до веб-версії</a>
                        <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.5 11L6.5 6L1.5 1" stroke="#F1F0FF" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <a href="!#" className="topBlock_button-link  link-fone">Завантажити додаток на смартфон</a>
                </section>

            </div>

        </div >

    )

}

export default BusinessCenterBlock
