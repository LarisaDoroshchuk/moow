import React, { } from 'react';
// import { Link } from 'react-router-dom';
import './LastQuestions.scss';


const LastQuestions = () => {

    return (
        <div className="lastQuestions_wrapper">

            <div className="lastQuestions_container">

                <h3 className="lastQuestions-title">Залишились запитання?</h3>
                <h5 className="lastQuestions-text">Перейди на сторінку FAQ, там є відповіді на часті запитання. А якщо все ж не знайшдеш відповіді на запитання, звернись до нашого чат-боту! </h5>

                <section className="lastQuestions_block-btn">
                    <a href="!#" className="lastQuestions_button-link  link-faq">Перейди до FAQ</a>
                    <a href="!#" className="lastQuestions_button-link  link-chat">Написати через чат-бот</a>
                </section>

                <h6 className="lastQuestions-content">Середній час відповіді у чат-боті в робочий час (понеділок – п'ятниця, з 10:00 до 18:00) – 2 години.
                    При високому завантаженні термін очікування відповіді може бути збільшено.
                    У вихідні дні ми відповідаємо протягом доби.</h6>

            </div>

        </div >

    )

}
export default LastQuestions
