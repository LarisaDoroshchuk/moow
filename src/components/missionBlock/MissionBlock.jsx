import React, { } from 'react';
import '../topBlock/TopBlock.scss';
import './MissionBlock.scss';

const MissionBlock = () => {

    return (
        <div className="wrapper-TopBlock wrapper-missionBlock" id="top-of-site-pixel-anchor">

            <div className="container-parallax">

                <h1 className="topBlock-text text-missionBlock">Місія та Візія</h1>
                <h2 className="topBlock-title title-missionBlock">Moow прагне об'єднати всіх учасників агро-транспортного ринку, подарувати людям місце, де кожен може знайти свого ділового партнера та не сумніватися у його чесності. Ми - аграрії, бізнес-девелопери та технічні спеціалісти, що поєднали свої компетенції для створення хабу, який би міг закрити всі потреби, які стосуються ніш агро продукції, транспорту, складів, спеціальної техніки та страхування.</h2>

                <section className="topBlock_web-block missionBlock-block">
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

export default MissionBlock
