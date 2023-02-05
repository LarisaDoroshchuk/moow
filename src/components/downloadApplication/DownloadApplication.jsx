import React, { } from 'react';
// import { Link } from 'react-router-dom';
import './DownloadApplication.scss';


const DownloadApplication = () => {

    return (
        <div className="downloadApplication_wrapper">

            <h3 className="downloadApplication-title">Завантажуйте додаток або працюйте через браузер</h3>
            <h5 className="downloadApplication-text">Весь функціонал доступний у двох форматах. Працюйте через телефон або на комп’ютері.</h5>

            <a href="!#" class="downloadApplication_button-link  link_web">Почати працювати через браузер </a>

            <section className="downloadApplication_block-btn">

                <a href="https://play.google.com/" class="downloadApplication_button-link  link-googlePlay">Завантажити додаток з Google Play </a>
                <a href="https://www.apple.com/ua/app-store/" class="downloadApplication_button-link  link-appStore">Завантажити додаток з App Store</a>

            </section>

        </div >
    )
}
export default DownloadApplication
