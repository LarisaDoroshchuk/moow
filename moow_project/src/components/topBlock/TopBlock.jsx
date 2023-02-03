import React, { } from 'react';
// import { Link } from 'react-router-dom';
import './TopBlock.scss';


const TopBlock = () => {

    return (
        <div className="wrapper-TopBlock">

            <div class="container-parallax">

                <h2 className="topBlock-text">Весь агро-транспортний ринок
                    в одному сервісі</h2>
                <h1 className="topBlock-title">Платформа для фермерів, перевізників, промислових та торгових компаній.</h1>

                <section className="topBlock_web-block">
                    <div className="web-block">
                        <a href="!#" class="topBlock_button-link  link-web">Перейти до веб-версії</a>
                        <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.5 11L6.5 6L1.5 1" stroke="#F1F0FF" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                    <a href="!#" class="topBlock_button-link  link-fone">Завантажити додаток на смартфон</a>
                </section>

            </div>

        </div >

    )

}

export default TopBlock
