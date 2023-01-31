import React, { } from 'react';
// import { Link } from 'react-router-dom';
import './AnswersBlock.scss';


const AnswersBlock = () => {

    return (
        <div className="answersBlock_container">

            <section className="answersBlock">
                <h3 className="answersBlock-title">Для кого ми існуємо</h3>

                <div className="answer-wrap">
                    <svg className="answer-img" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 10.4897C19.9682 12.7635 19.0004 15.1984 16.9717 17.1844C15.5404 18.5856 13.82 19.463 11.841 19.8224C9.66822 20.2171 7.57325 19.9593 5.58612 18.9947C3.62621 18.0433 2.14674 16.5883 1.14017 14.6677C0.302461 13.0693 -0.0683971 11.3604 0.0103272 9.56508C0.121296 7.03443 1.03626 4.82646 2.8145 2.99682C4.39271 1.373 6.32251 0.410319 8.57468 0.102129C10.6252 -0.178463 12.5921 0.115397 14.4505 1.02986C16.3713 1.97499 17.8378 3.3948 18.8446 5.27328C19.6271 6.73305 20.0045 8.29542 20 10.4897ZM9.83981 15.9561C9.87177 15.8689 9.88984 15.8254 9.9038 15.7807C10.3434 14.3708 10.7836 12.961 11.2199 11.5501C11.2502 11.4523 11.2959 11.4007 11.3978 11.3699C12.2999 11.0974 13.2001 10.8188 14.1007 10.5415C14.6708 10.3659 15.2406 10.1895 15.8365 10.0055C15.7632 9.97748 15.7154 9.95604 15.6657 9.94074C14.2453 9.50319 12.8251 9.06467 11.403 8.63234C11.2944 8.59935 11.2499 8.5449 11.2185 8.44328C10.7819 7.03248 10.3412 5.62292 9.90113 4.2132C9.88771 4.1702 9.86959 4.12866 9.84233 4.05645C9.81661 4.12774 9.80231 4.1631 9.79098 4.19937C9.35069 5.60919 8.90962 7.01878 8.47267 8.42962C8.43818 8.541 8.38708 8.6007 8.26802 8.63682C6.92453 9.04444 5.5833 9.45944 4.24157 9.87276C4.11782 9.91088 3.99473 9.95109 3.84168 9.99977C3.91526 10.0248 3.95565 10.0397 3.99676 10.0524C5.41272 10.4877 6.82822 10.9247 8.2457 11.3551C8.37739 11.3951 8.43952 11.4592 8.47891 11.5905C8.68696 12.2838 8.90659 12.9737 9.12262 13.6647C9.35723 14.4151 9.5923 15.1654 9.83981 15.9561Z" fill="#5A5A5A" />
                    </svg>

                    <p className="answer-text">Для користувачів із різних сфер бізнесу.</p>
                </div>

                <div className="answer-wrap">
                    <svg className="answer-img" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 10.4897C19.9682 12.7635 19.0004 15.1984 16.9717 17.1844C15.5404 18.5856 13.82 19.463 11.841 19.8224C9.66822 20.2171 7.57325 19.9593 5.58612 18.9947C3.62621 18.0433 2.14674 16.5883 1.14017 14.6677C0.302461 13.0693 -0.0683971 11.3604 0.0103272 9.56508C0.121296 7.03443 1.03626 4.82646 2.8145 2.99682C4.39271 1.373 6.32251 0.410319 8.57468 0.102129C10.6252 -0.178463 12.5921 0.115397 14.4505 1.02986C16.3713 1.97499 17.8378 3.3948 18.8446 5.27328C19.6271 6.73305 20.0045 8.29542 20 10.4897ZM9.83981 15.9561C9.87177 15.8689 9.88984 15.8254 9.9038 15.7807C10.3434 14.3708 10.7836 12.961 11.2199 11.5501C11.2502 11.4523 11.2959 11.4007 11.3978 11.3699C12.2999 11.0974 13.2001 10.8188 14.1007 10.5415C14.6708 10.3659 15.2406 10.1895 15.8365 10.0055C15.7632 9.97748 15.7154 9.95604 15.6657 9.94074C14.2453 9.50319 12.8251 9.06467 11.403 8.63234C11.2944 8.59935 11.2499 8.5449 11.2185 8.44328C10.7819 7.03248 10.3412 5.62292 9.90113 4.2132C9.88771 4.1702 9.86959 4.12866 9.84233 4.05645C9.81661 4.12774 9.80231 4.1631 9.79098 4.19937C9.35069 5.60919 8.90962 7.01878 8.47267 8.42962C8.43818 8.541 8.38708 8.6007 8.26802 8.63682C6.92453 9.04444 5.5833 9.45944 4.24157 9.87276C4.11782 9.91088 3.99473 9.95109 3.84168 9.99977C3.91526 10.0248 3.95565 10.0397 3.99676 10.0524C5.41272 10.4877 6.82822 10.9247 8.2457 11.3551C8.37739 11.3951 8.43952 11.4592 8.47891 11.5905C8.68696 12.2838 8.90659 12.9737 9.12262 13.6647C9.35723 14.4151 9.5923 15.1654 9.83981 15.9561Z" fill="#5A5A5A" />
                    </svg>

                    <p className="answer-text">Для оптових та роздрібних покупців та продавців.</p>
                </div>

                <div className="answer-wrap">
                    <svg className="answer-img" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 10.4897C19.9682 12.7635 19.0004 15.1984 16.9717 17.1844C15.5404 18.5856 13.82 19.463 11.841 19.8224C9.66822 20.2171 7.57325 19.9593 5.58612 18.9947C3.62621 18.0433 2.14674 16.5883 1.14017 14.6677C0.302461 13.0693 -0.0683971 11.3604 0.0103272 9.56508C0.121296 7.03443 1.03626 4.82646 2.8145 2.99682C4.39271 1.373 6.32251 0.410319 8.57468 0.102129C10.6252 -0.178463 12.5921 0.115397 14.4505 1.02986C16.3713 1.97499 17.8378 3.3948 18.8446 5.27328C19.6271 6.73305 20.0045 8.29542 20 10.4897ZM9.83981 15.9561C9.87177 15.8689 9.88984 15.8254 9.9038 15.7807C10.3434 14.3708 10.7836 12.961 11.2199 11.5501C11.2502 11.4523 11.2959 11.4007 11.3978 11.3699C12.2999 11.0974 13.2001 10.8188 14.1007 10.5415C14.6708 10.3659 15.2406 10.1895 15.8365 10.0055C15.7632 9.97748 15.7154 9.95604 15.6657 9.94074C14.2453 9.50319 12.8251 9.06467 11.403 8.63234C11.2944 8.59935 11.2499 8.5449 11.2185 8.44328C10.7819 7.03248 10.3412 5.62292 9.90113 4.2132C9.88771 4.1702 9.86959 4.12866 9.84233 4.05645C9.81661 4.12774 9.80231 4.1631 9.79098 4.19937C9.35069 5.60919 8.90962 7.01878 8.47267 8.42962C8.43818 8.541 8.38708 8.6007 8.26802 8.63682C6.92453 9.04444 5.5833 9.45944 4.24157 9.87276C4.11782 9.91088 3.99473 9.95109 3.84168 9.99977C3.91526 10.0248 3.95565 10.0397 3.99676 10.0524C5.41272 10.4877 6.82822 10.9247 8.2457 11.3551C8.37739 11.3951 8.43952 11.4592 8.47891 11.5905C8.68696 12.2838 8.90659 12.9737 9.12262 13.6647C9.35723 14.4151 9.5923 15.1654 9.83981 15.9561Z" fill="#5A5A5A" />
                    </svg>

                    <p className="answer-text">Для дрібного та середнього бізнесу.</p>
                </div>

                <div className="answer-wrap">
                    <svg className="answer-img" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 10.4897C19.9682 12.7635 19.0004 15.1984 16.9717 17.1844C15.5404 18.5856 13.82 19.463 11.841 19.8224C9.66822 20.2171 7.57325 19.9593 5.58612 18.9947C3.62621 18.0433 2.14674 16.5883 1.14017 14.6677C0.302461 13.0693 -0.0683971 11.3604 0.0103272 9.56508C0.121296 7.03443 1.03626 4.82646 2.8145 2.99682C4.39271 1.373 6.32251 0.410319 8.57468 0.102129C10.6252 -0.178463 12.5921 0.115397 14.4505 1.02986C16.3713 1.97499 17.8378 3.3948 18.8446 5.27328C19.6271 6.73305 20.0045 8.29542 20 10.4897ZM9.83981 15.9561C9.87177 15.8689 9.88984 15.8254 9.9038 15.7807C10.3434 14.3708 10.7836 12.961 11.2199 11.5501C11.2502 11.4523 11.2959 11.4007 11.3978 11.3699C12.2999 11.0974 13.2001 10.8188 14.1007 10.5415C14.6708 10.3659 15.2406 10.1895 15.8365 10.0055C15.7632 9.97748 15.7154 9.95604 15.6657 9.94074C14.2453 9.50319 12.8251 9.06467 11.403 8.63234C11.2944 8.59935 11.2499 8.5449 11.2185 8.44328C10.7819 7.03248 10.3412 5.62292 9.90113 4.2132C9.88771 4.1702 9.86959 4.12866 9.84233 4.05645C9.81661 4.12774 9.80231 4.1631 9.79098 4.19937C9.35069 5.60919 8.90962 7.01878 8.47267 8.42962C8.43818 8.541 8.38708 8.6007 8.26802 8.63682C6.92453 9.04444 5.5833 9.45944 4.24157 9.87276C4.11782 9.91088 3.99473 9.95109 3.84168 9.99977C3.91526 10.0248 3.95565 10.0397 3.99676 10.0524C5.41272 10.4877 6.82822 10.9247 8.2457 11.3551C8.37739 11.3951 8.43952 11.4592 8.47891 11.5905C8.68696 12.2838 8.90659 12.9737 9.12262 13.6647C9.35723 14.4151 9.5923 15.1654 9.83981 15.9561Z" fill="#5A5A5A" />
                    </svg>

                    <p className="answer-text">Для фермера, водія трактора та великих виробників.</p>
                </div>

                <div className="answer-wrap">
                    <svg className="answer-img" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 10.4897C19.9682 12.7635 19.0004 15.1984 16.9717 17.1844C15.5404 18.5856 13.82 19.463 11.841 19.8224C9.66822 20.2171 7.57325 19.9593 5.58612 18.9947C3.62621 18.0433 2.14674 16.5883 1.14017 14.6677C0.302461 13.0693 -0.0683971 11.3604 0.0103272 9.56508C0.121296 7.03443 1.03626 4.82646 2.8145 2.99682C4.39271 1.373 6.32251 0.410319 8.57468 0.102129C10.6252 -0.178463 12.5921 0.115397 14.4505 1.02986C16.3713 1.97499 17.8378 3.3948 18.8446 5.27328C19.6271 6.73305 20.0045 8.29542 20 10.4897ZM9.83981 15.9561C9.87177 15.8689 9.88984 15.8254 9.9038 15.7807C10.3434 14.3708 10.7836 12.961 11.2199 11.5501C11.2502 11.4523 11.2959 11.4007 11.3978 11.3699C12.2999 11.0974 13.2001 10.8188 14.1007 10.5415C14.6708 10.3659 15.2406 10.1895 15.8365 10.0055C15.7632 9.97748 15.7154 9.95604 15.6657 9.94074C14.2453 9.50319 12.8251 9.06467 11.403 8.63234C11.2944 8.59935 11.2499 8.5449 11.2185 8.44328C10.7819 7.03248 10.3412 5.62292 9.90113 4.2132C9.88771 4.1702 9.86959 4.12866 9.84233 4.05645C9.81661 4.12774 9.80231 4.1631 9.79098 4.19937C9.35069 5.60919 8.90962 7.01878 8.47267 8.42962C8.43818 8.541 8.38708 8.6007 8.26802 8.63682C6.92453 9.04444 5.5833 9.45944 4.24157 9.87276C4.11782 9.91088 3.99473 9.95109 3.84168 9.99977C3.91526 10.0248 3.95565 10.0397 3.99676 10.0524C5.41272 10.4877 6.82822 10.9247 8.2457 11.3551C8.37739 11.3951 8.43952 11.4592 8.47891 11.5905C8.68696 12.2838 8.90659 12.9737 9.12262 13.6647C9.35723 14.4151 9.5923 15.1654 9.83981 15.9561Z" fill="#5A5A5A" />
                    </svg>

                    <p className="answer-text">Для тих, хто цінує час та прибуток.</p>
                </div>
            </section>

            <section className="input-moow">
                <svg className="input-moow_img" width="20" height="223" viewBox="0 0 20 223" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.1852 18.1658C10.7231 18.1658 9.27647 18.1658 7.81615 18.1658C7.81615 18.1025 7.81615 18.0463 7.81615 17.9901C7.81594 14.3146 7.81644 10.6391 7.81472 6.96367C7.81447 6.4277 7.7724 5.89524 7.59463 5.38424C7.42059 4.88398 7.12578 4.49431 6.58479 4.35265C6.23123 4.26007 5.87555 4.26227 5.52701 4.37516C5.00703 4.54359 4.73926 4.9451 4.57712 5.43578C4.43021 5.88036 4.37951 6.34157 4.37876 6.80606C4.37273 10.5256 4.37138 14.2451 4.36861 17.9646C4.36856 18.0262 4.3686 18.0879 4.3686 18.161C2.91597 18.161 1.46981 18.161 0.00237386 18.161C0.00237386 18.117 0.00237681 18.0705 0.00237353 18.024C0.00211136 14.3132 -0.00425184 10.6024 0.00501455 6.8916C0.00810817 5.65274 0.211256 4.44547 0.765097 3.32272C1.65819 1.51225 3.1124 0.437271 5.09841 0.095604C6.19866 -0.0936807 7.28122 -0.00955963 8.32303 0.416721C8.97212 0.682313 9.52571 1.0816 9.95998 1.63795C9.97084 1.65186 9.98134 1.66605 9.97448 1.65701C10.2491 1.40655 10.5021 1.13956 10.791 0.919536C11.4721 0.40063 12.2632 0.143934 13.1051 0.0501919C14.483 -0.103249 15.7891 0.132523 16.99 0.844097C18.288 1.61319 19.1129 2.75796 19.5803 4.17561C19.8505 4.99516 19.9864 5.84008 19.9885 6.70079C19.9978 10.4865 19.9972 14.2723 20 18.058C20 18.0885 19.9975 18.1191 19.9956 18.1615C18.5464 18.1615 17.1004 18.1615 15.6314 18.1615C15.6314 18.108 15.6314 18.0485 15.6314 17.989C15.6312 14.3312 15.6323 10.6734 15.6292 7.01562C15.6287 6.50749 15.6035 5.99779 15.443 5.51075C15.3707 5.29126 15.2752 5.07072 15.1464 4.88022C14.8176 4.39368 14.3194 4.25703 13.765 4.29829C13.0105 4.35443 12.5592 4.76999 12.3454 5.57629C12.2268 6.02341 12.1865 6.47991 12.1864 6.94027C12.1851 10.6202 12.1854 14.3001 12.1852 17.9799C12.1852 18.037 12.1852 18.0941 12.1852 18.1658Z" fill="#665CD1" />
                    <path d="M16.3411 44.8715C18.2345 43.0179 19.1378 40.7453 19.1674 38.6231C19.1717 36.5751 18.8194 35.1169 18.0891 33.7544C17.1494 32.0012 15.7807 30.676 13.988 29.7939C12.2534 28.9404 10.4176 28.6661 8.50385 28.928C6.40182 29.2156 4.60068 30.1142 3.12768 31.6297C1.46799 33.3374 0.614023 35.3981 0.510453 37.7601C0.436977 39.4358 0.783111 41.0307 1.56498 42.5225C2.50443 44.3151 3.88528 45.6731 5.71453 46.561C7.56918 47.4613 9.52449 47.702 11.5524 47.3336C13.3995 46.9981 15.0052 46.1792 16.3411 44.8715Z" fill="#FEFEFE" />
                    <path d="M20 38.6557C19.9682 40.9296 19.0004 43.3644 16.9717 45.3504C15.5404 46.7516 13.82 47.629 11.841 47.9884C9.66822 48.3831 7.57325 48.1253 5.58612 47.1607C3.62621 46.2093 2.14674 44.7543 1.14018 42.8337C0.302461 41.2353 -0.0683971 39.5265 0.0103272 37.7311C0.121296 35.2004 1.03626 32.9925 2.8145 31.1628C4.39271 29.539 6.32251 28.5763 8.57468 28.2681C10.6252 27.9876 12.5921 28.2814 14.4505 29.1959C16.3713 30.141 17.8378 31.5608 18.8446 33.4393C19.6271 34.8991 20.0045 36.4614 20 38.6557ZM9.83981 44.1221C9.87177 44.0349 9.88984 43.9915 9.9038 43.9467C10.3434 42.5368 10.7836 41.127 11.2199 39.7161C11.2502 39.6183 11.2959 39.5667 11.3978 39.5359C12.2999 39.2634 13.2001 38.9848 14.1007 38.7075C14.6708 38.5319 15.2406 38.3555 15.8365 38.1715C15.7632 38.1435 15.7154 38.1221 15.6657 38.1068C14.2453 37.6692 12.8251 37.2307 11.403 36.7984C11.2944 36.7654 11.2499 36.7109 11.2185 36.6093C10.7819 35.1985 10.3412 33.7889 9.90113 32.3792C9.88771 32.3362 9.86959 32.2947 9.84233 32.2225C9.81661 32.2938 9.80231 32.3291 9.79098 32.3654C9.35069 33.7752 8.90962 35.1848 8.47267 36.5956C8.43818 36.707 8.38708 36.7667 8.26802 36.8028C6.92453 37.2105 5.5833 37.6255 4.24157 38.0388C4.11782 38.0769 3.99473 38.1171 3.84168 38.1658C3.91526 38.1908 3.95565 38.2057 3.99676 38.2184C5.41272 38.6538 6.82822 39.0907 8.2457 39.5212C8.37739 39.5611 8.43952 39.6252 8.47891 39.7565C8.68696 40.4498 8.90659 41.1398 9.12262 41.8307C9.35723 42.5812 9.5923 43.3314 9.83981 44.1221Z" fill="#665CD1" />
                    <path d="M20 67.9112C19.9519 70.9555 18.9735 73.4077 16.9161 75.3976C15.469 76.7972 13.7348 77.6692 11.742 78.006C9.31253 78.4166 7.00743 78.0469 4.88755 76.7826C2.40539 75.3022 0.864397 73.1225 0.251969 70.3169C-0.254537 67.9965 -0.0070366 65.739 1.0818 63.6194C2.57696 60.7089 4.96339 58.9054 8.20704 58.3389C11.4468 57.7731 14.339 58.5965 16.7834 60.802C18.511 62.3608 19.5294 64.321 19.8749 66.6162C19.9495 67.1118 19.9724 67.6151 20 67.9112ZM10.2216 62.782C9.1797 62.7866 8.39356 62.966 7.6647 63.3539C5.38775 64.5657 4.27465 67.061 4.89061 69.5528C5.53193 72.1472 8.06851 73.8703 10.709 73.5051C13.0918 73.1757 15.0414 71.1305 15.2578 68.7354C15.3773 67.4132 15.0662 66.1974 14.3014 65.113C13.2609 63.6377 11.8321 62.8423 10.2216 62.782Z" fill="#665CD1" />
                    <path d="M12.1872 91.9472C12.1872 92.0099 12.1872 92.0671 12.1872 92.1243C12.187 94.5614 12.185 96.9985 12.1882 99.4357C12.189 99.9988 12.2418 100.557 12.4591 101.085C12.8515 102.039 14.0904 102.37 14.8924 101.735C15.2505 101.452 15.4194 101.051 15.4983 100.621C15.5678 100.242 15.6209 99.8533 15.6218 99.4689C15.6304 95.7709 15.6265 92.0729 15.6261 88.3749C15.6261 88.3086 15.6261 88.2423 15.6261 88.166C17.0827 88.166 18.5287 88.166 19.9981 88.166C19.9981 88.2081 19.9981 88.2546 19.9981 88.3011C19.9978 92.0526 20.0049 95.8041 19.9935 99.5555C19.9895 100.872 19.7336 102.141 19.0865 103.305C18.1782 104.939 16.7847 105.904 14.9521 106.23C13.8526 106.426 12.77 106.349 11.7238 105.934C11.0658 105.673 10.5051 105.275 10.0594 104.72C10.0431 104.7 10.026 104.68 10.0063 104.657C9.87266 104.801 9.74936 104.947 9.61255 105.079C8.96362 105.706 8.17597 106.066 7.29882 106.217C5.55185 106.519 3.93008 106.205 2.49114 105.138C1.37047 104.307 0.697306 103.169 0.323086 101.842C0.0981325 101.044 0.00232825 100.228 0.00174299 99.4006C-0.000851848 95.7159 0.00028341 92.0313 6.48111e-05 88.3467C6.48111e-05 88.2895 6.48111e-05 88.2324 6.48111e-05 88.1662C1.45989 88.1662 2.90941 88.1662 4.37578 88.1662C4.37578 88.2266 4.37579 88.2831 4.37579 88.3396C4.37553 92.051 4.37465 95.7624 4.37577 99.4737C4.37592 99.979 4.42764 100.478 4.59512 100.959C4.93963 101.949 6.02962 102.364 6.92211 101.842C7.32115 101.609 7.51853 101.229 7.64168 100.804C7.76893 100.365 7.81114 99.9129 7.81122 99.457C7.81162 97.0154 7.81117 94.5739 7.81101 92.1323C7.811 92.0746 7.811 92.0169 7.811 91.9472C9.26794 91.9472 10.7172 91.9472 12.1872 91.9472Z" fill="#665CD1" />
                    <path d="M7.81283 130.719C7.81283 130.656 7.81282 130.599 7.81283 130.542C7.81295 128.105 7.81504 125.667 7.81177 123.23C7.81101 122.667 7.75821 122.109 7.54093 121.581C7.1485 120.627 5.90956 120.296 5.10759 120.931C4.74949 121.214 4.58057 121.615 4.50166 122.045C4.43218 122.424 4.37912 122.813 4.37822 123.197C4.36958 126.895 4.37354 130.593 4.37389 134.291C4.3739 134.357 4.37389 134.424 4.37389 134.5C2.91728 134.5 1.47125 134.5 0.00194168 134.5C0.00194168 134.458 0.00193405 134.411 0.00193405 134.365C0.00215912 130.613 -0.00486374 126.862 0.00653839 123.111C0.0105362 121.794 0.266401 120.525 0.913452 119.361C1.8218 117.727 3.21527 116.762 5.04795 116.436C6.14741 116.24 7.22999 116.317 8.27615 116.732C8.93424 116.993 9.49491 117.392 9.94061 117.946C9.95687 117.966 9.974 117.986 9.99373 118.009C10.1273 117.865 10.2506 117.719 10.3875 117.587C11.0364 116.961 11.824 116.6 12.7012 116.449C14.4481 116.147 16.0699 116.461 17.5089 117.528C18.6295 118.359 19.3027 119.497 19.6769 120.824C19.9019 121.622 19.9977 122.438 19.9983 123.265C20.0009 126.95 19.9997 130.635 19.9999 134.319C19.9999 134.376 19.9999 134.434 19.9999 134.5C18.5401 134.5 17.0906 134.5 15.6242 134.5C15.6242 134.439 15.6242 134.383 15.6242 134.326C15.6245 130.615 15.6253 126.904 15.6242 123.192C15.6241 122.687 15.5724 122.188 15.4049 121.707C15.0604 120.717 13.9704 120.302 13.0779 120.824C12.6788 121.057 12.4815 121.437 12.3583 121.862C12.2311 122.301 12.1889 122.753 12.1888 123.209C12.1884 125.651 12.1888 128.092 12.189 130.534C12.189 130.591 12.189 130.649 12.189 130.719C10.7321 130.719 9.28275 130.719 7.81283 130.719Z" fill="#665CD1" />
                    <path d="M20 154.245C19.9519 157.289 18.9735 159.742 16.9161 161.732C15.469 163.131 13.7348 164.003 11.742 164.34C9.31253 164.751 7.00743 164.381 4.88755 163.117C2.40539 161.636 0.864397 159.457 0.251969 156.651C-0.254537 154.331 -0.0070366 152.073 1.0818 149.953C2.57696 147.043 4.96339 145.239 8.20704 144.673C11.4468 144.107 14.339 144.93 16.7834 147.136C18.511 148.695 19.5294 150.655 19.8749 152.95C19.9495 153.446 19.9724 153.949 20 154.245ZM10.2216 149.116C9.1797 149.121 8.39356 149.3 7.6647 149.688C5.38775 150.9 4.27465 153.395 4.89061 155.887C5.53193 158.481 8.06851 160.204 10.709 159.839C13.0918 159.51 15.0414 157.464 15.2578 155.069C15.3773 153.747 15.0662 152.531 14.3014 151.447C13.2609 149.972 11.8321 149.176 10.2216 149.116Z" fill="#665CD1" />
                    <path d="M16.3411 191.205C18.2345 189.352 19.1378 187.079 19.1674 184.957C19.1717 182.909 18.8194 181.451 18.0891 180.088C17.1494 178.335 15.7807 177.01 13.988 176.128C12.2534 175.274 10.4176 175 8.50385 175.262C6.40182 175.55 4.60068 176.448 3.12768 177.964C1.46799 179.671 0.614023 181.732 0.510453 184.094C0.436977 185.77 0.783111 187.365 1.56498 188.857C2.50443 190.649 3.88528 192.007 5.71453 192.895C7.56918 193.795 9.52449 194.036 11.5524 193.668C13.3995 193.332 15.0052 192.513 16.3411 191.205Z" fill="#EBEBEB" fill-opacity="0.5" />
                    <path d="M20 184.99C19.9682 187.264 19.0004 189.698 16.9717 191.684C15.5404 193.086 13.82 193.963 11.841 194.322C9.66822 194.717 7.57325 194.459 5.58612 193.495C3.62621 192.543 2.14674 191.088 1.14018 189.168C0.302461 187.569 -0.0683971 185.86 0.0103272 184.065C0.121296 181.534 1.03626 179.326 2.8145 177.497C4.39271 175.873 6.32251 174.91 8.57468 174.602C10.6252 174.322 12.5921 174.615 14.4505 175.53C16.3713 176.475 17.8378 177.895 18.8446 179.773C19.6271 181.233 20.0045 182.795 20 184.99ZM9.83981 190.456C9.87177 190.369 9.88984 190.325 9.9038 190.281C10.3434 188.871 10.7836 187.461 11.2199 186.05C11.2502 185.952 11.2959 185.901 11.3978 185.87C12.2999 185.597 13.2001 185.319 14.1007 185.041C14.6708 184.866 15.2406 184.69 15.8365 184.505C15.7632 184.477 15.7154 184.456 15.6657 184.441C14.2453 184.003 12.8251 183.565 11.403 183.132C11.2944 183.099 11.2499 183.045 11.2185 182.943C10.7819 181.532 10.3412 180.123 9.90113 178.713C9.88771 178.67 9.86959 178.629 9.84233 178.556C9.81661 178.628 9.80231 178.663 9.79098 178.699C9.35069 180.109 8.90962 181.519 8.47267 182.93C8.43818 183.041 8.38708 183.101 8.26802 183.137C6.92453 183.544 5.5833 183.959 4.24157 184.373C4.11782 184.411 3.99473 184.451 3.84168 184.5C3.91526 184.525 3.95565 184.54 3.99676 184.552C5.41272 184.988 6.82822 185.425 8.2457 185.855C8.37739 185.895 8.43952 185.959 8.47891 186.09C8.68696 186.784 8.90659 187.474 9.12262 188.165C9.35723 188.915 9.5923 189.665 9.83981 190.456Z" fill="#665CD1" />
                    <path d="M7.81481 204.499C9.27691 204.499 10.7235 204.499 12.1838 204.499C12.1838 204.563 12.1838 204.619 12.1838 204.675C12.184 208.35 12.1835 212.026 12.1853 215.701C12.1855 216.237 12.2276 216.77 12.4053 217.281C12.5794 217.781 12.8742 218.171 13.4152 218.312C13.7687 218.405 14.1244 218.403 14.473 218.29C14.9929 218.121 15.2607 217.72 15.4228 217.229C15.5698 216.785 15.6205 216.323 15.6212 215.859C15.6272 212.139 15.6286 208.42 15.6314 204.7C15.6314 204.639 15.6314 204.577 15.6314 204.504C17.084 204.504 18.5302 204.504 19.9976 204.504C19.9976 204.548 19.9976 204.595 19.9976 204.641C19.9979 208.352 20.0042 212.063 19.995 215.773C19.9919 217.012 19.7887 218.22 19.2349 219.342C18.3418 221.153 16.8876 222.228 14.9016 222.569C13.8013 222.759 12.7188 222.675 11.6769 222.248C11.0278 221.983 10.4743 221.583 10.04 221.027C10.0291 221.013 10.0186 220.999 10.0255 221.008C9.7509 221.258 9.49784 221.525 9.20901 221.746C8.52782 222.264 7.73672 222.521 6.89491 222.615C5.51699 222.768 4.21083 222.533 3.00996 221.821C1.71201 221.052 0.887089 219.907 0.419655 218.489C0.149426 217.67 0.0135822 216.825 0.0114708 215.964C0.00217628 212.179 0.00277519 208.393 -3.05176e-05 204.607C-5.34058e-05 204.576 0.00246811 204.546 0.00432396 204.504C1.45356 204.504 2.89957 204.504 4.36855 204.504C4.36855 204.557 4.36854 204.617 4.36855 204.676C4.36878 208.334 4.36768 211.992 4.37082 215.649C4.37125 216.158 4.39648 216.667 4.55695 217.154C4.62927 217.374 4.72482 217.594 4.85357 217.785C5.18241 218.271 5.68053 218.408 6.23492 218.367C6.98946 218.311 7.44073 217.895 7.65457 217.089C7.77315 216.642 7.81346 216.185 7.81362 215.725C7.81488 212.045 7.81461 208.365 7.81481 204.685C7.81481 204.628 7.81481 204.571 7.81481 204.499Z" fill="#665CD1" />
                </svg>

                <div className="input-moow_wrap">

                    <h3 className="input-moow_text">Спробуй прямо зараз через браузер!</h3>

                    <a href="!#" className="input-moow_link-web">Перейти до веб-версії</a>

                    <h3 className="input-moow_text">Або завантажуй та спробуй з смартфону</h3>

                    <div className="input-moow_container">

                        <a href="!#">
                            <img className="input-moow_google-img" src="/img/google.png" alt="google play" />
                        </a>

                        <a href="!#">
                            <img className="input-moow_appStore-img" src="/img/appStore.png" alt="google play" />
                        </a>

                    </div>


                </div>

                <svg className="input-moow_img" width="20" height="223" viewBox="0 0 20 223" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.1852 18.1658C10.7231 18.1658 9.27647 18.1658 7.81615 18.1658C7.81615 18.1025 7.81615 18.0463 7.81615 17.9901C7.81594 14.3146 7.81644 10.6391 7.81472 6.96367C7.81447 6.4277 7.7724 5.89524 7.59463 5.38424C7.42059 4.88398 7.12578 4.49431 6.58479 4.35265C6.23123 4.26007 5.87555 4.26227 5.52701 4.37516C5.00703 4.54359 4.73926 4.9451 4.57712 5.43578C4.43021 5.88036 4.37951 6.34157 4.37876 6.80606C4.37273 10.5256 4.37138 14.2451 4.36861 17.9646C4.36856 18.0262 4.3686 18.0879 4.3686 18.161C2.91597 18.161 1.46981 18.161 0.00237386 18.161C0.00237386 18.117 0.00237681 18.0705 0.00237353 18.024C0.00211136 14.3132 -0.00425184 10.6024 0.00501455 6.8916C0.00810817 5.65274 0.211256 4.44547 0.765097 3.32272C1.65819 1.51225 3.1124 0.437271 5.09841 0.095604C6.19866 -0.0936807 7.28122 -0.00955963 8.32303 0.416721C8.97212 0.682313 9.52571 1.0816 9.95998 1.63795C9.97084 1.65186 9.98134 1.66605 9.97448 1.65701C10.2491 1.40655 10.5021 1.13956 10.791 0.919536C11.4721 0.40063 12.2632 0.143934 13.1051 0.0501919C14.483 -0.103249 15.7891 0.132523 16.99 0.844097C18.288 1.61319 19.1129 2.75796 19.5803 4.17561C19.8505 4.99516 19.9864 5.84008 19.9885 6.70079C19.9978 10.4865 19.9972 14.2723 20 18.058C20 18.0885 19.9975 18.1191 19.9956 18.1615C18.5464 18.1615 17.1004 18.1615 15.6314 18.1615C15.6314 18.108 15.6314 18.0485 15.6314 17.989C15.6312 14.3312 15.6323 10.6734 15.6292 7.01562C15.6287 6.50749 15.6035 5.99779 15.443 5.51075C15.3707 5.29126 15.2752 5.07072 15.1464 4.88022C14.8176 4.39368 14.3194 4.25703 13.765 4.29829C13.0105 4.35443 12.5592 4.76999 12.3454 5.57629C12.2268 6.02341 12.1865 6.47991 12.1864 6.94027C12.1851 10.6202 12.1854 14.3001 12.1852 17.9799C12.1852 18.037 12.1852 18.0941 12.1852 18.1658Z" fill="#665CD1" />
                    <path d="M16.3411 44.8715C18.2345 43.0179 19.1378 40.7453 19.1674 38.6231C19.1717 36.5751 18.8194 35.1169 18.0891 33.7544C17.1494 32.0012 15.7807 30.676 13.988 29.7939C12.2534 28.9404 10.4176 28.6661 8.50385 28.928C6.40182 29.2156 4.60068 30.1142 3.12768 31.6297C1.46799 33.3374 0.614023 35.3981 0.510453 37.7601C0.436977 39.4358 0.783111 41.0307 1.56498 42.5225C2.50443 44.3151 3.88528 45.6731 5.71453 46.561C7.56918 47.4613 9.52449 47.702 11.5524 47.3336C13.3995 46.9981 15.0052 46.1792 16.3411 44.8715Z" fill="#FEFEFE" />
                    <path d="M20 38.6557C19.9682 40.9296 19.0004 43.3644 16.9717 45.3504C15.5404 46.7516 13.82 47.629 11.841 47.9884C9.66822 48.3831 7.57325 48.1253 5.58612 47.1607C3.62621 46.2093 2.14674 44.7543 1.14018 42.8337C0.302461 41.2353 -0.0683971 39.5265 0.0103272 37.7311C0.121296 35.2004 1.03626 32.9925 2.8145 31.1628C4.39271 29.539 6.32251 28.5763 8.57468 28.2681C10.6252 27.9876 12.5921 28.2814 14.4505 29.1959C16.3713 30.141 17.8378 31.5608 18.8446 33.4393C19.6271 34.8991 20.0045 36.4614 20 38.6557ZM9.83981 44.1221C9.87177 44.0349 9.88984 43.9915 9.9038 43.9467C10.3434 42.5368 10.7836 41.127 11.2199 39.7161C11.2502 39.6183 11.2959 39.5667 11.3978 39.5359C12.2999 39.2634 13.2001 38.9848 14.1007 38.7075C14.6708 38.5319 15.2406 38.3555 15.8365 38.1715C15.7632 38.1435 15.7154 38.1221 15.6657 38.1068C14.2453 37.6692 12.8251 37.2307 11.403 36.7984C11.2944 36.7654 11.2499 36.7109 11.2185 36.6093C10.7819 35.1985 10.3412 33.7889 9.90113 32.3792C9.88771 32.3362 9.86959 32.2947 9.84233 32.2225C9.81661 32.2938 9.80231 32.3291 9.79098 32.3654C9.35069 33.7752 8.90962 35.1848 8.47267 36.5956C8.43818 36.707 8.38708 36.7667 8.26802 36.8028C6.92453 37.2105 5.5833 37.6255 4.24157 38.0388C4.11782 38.0769 3.99473 38.1171 3.84168 38.1658C3.91526 38.1908 3.95565 38.2057 3.99676 38.2184C5.41272 38.6538 6.82822 39.0907 8.2457 39.5212C8.37739 39.5611 8.43952 39.6252 8.47891 39.7565C8.68696 40.4498 8.90659 41.1398 9.12262 41.8307C9.35723 42.5812 9.5923 43.3314 9.83981 44.1221Z" fill="#665CD1" />
                    <path d="M20 67.9112C19.9519 70.9555 18.9735 73.4077 16.9161 75.3976C15.469 76.7972 13.7348 77.6692 11.742 78.006C9.31253 78.4166 7.00743 78.0469 4.88755 76.7826C2.40539 75.3022 0.864397 73.1225 0.251969 70.3169C-0.254537 67.9965 -0.0070366 65.739 1.0818 63.6194C2.57696 60.7089 4.96339 58.9054 8.20704 58.3389C11.4468 57.7731 14.339 58.5965 16.7834 60.802C18.511 62.3608 19.5294 64.321 19.8749 66.6162C19.9495 67.1118 19.9724 67.6151 20 67.9112ZM10.2216 62.782C9.1797 62.7866 8.39356 62.966 7.6647 63.3539C5.38775 64.5657 4.27465 67.061 4.89061 69.5528C5.53193 72.1472 8.06851 73.8703 10.709 73.5051C13.0918 73.1757 15.0414 71.1305 15.2578 68.7354C15.3773 67.4132 15.0662 66.1974 14.3014 65.113C13.2609 63.6377 11.8321 62.8423 10.2216 62.782Z" fill="#665CD1" />
                    <path d="M12.1872 91.9472C12.1872 92.0099 12.1872 92.0671 12.1872 92.1243C12.187 94.5614 12.185 96.9985 12.1882 99.4357C12.189 99.9988 12.2418 100.557 12.4591 101.085C12.8515 102.039 14.0904 102.37 14.8924 101.735C15.2505 101.452 15.4194 101.051 15.4983 100.621C15.5678 100.242 15.6209 99.8533 15.6218 99.4689C15.6304 95.7709 15.6265 92.0729 15.6261 88.3749C15.6261 88.3086 15.6261 88.2423 15.6261 88.166C17.0827 88.166 18.5287 88.166 19.9981 88.166C19.9981 88.2081 19.9981 88.2546 19.9981 88.3011C19.9978 92.0526 20.0049 95.8041 19.9935 99.5555C19.9895 100.872 19.7336 102.141 19.0865 103.305C18.1782 104.939 16.7847 105.904 14.9521 106.23C13.8526 106.426 12.77 106.349 11.7238 105.934C11.0658 105.673 10.5051 105.275 10.0594 104.72C10.0431 104.7 10.026 104.68 10.0063 104.657C9.87266 104.801 9.74936 104.947 9.61255 105.079C8.96362 105.706 8.17597 106.066 7.29882 106.217C5.55185 106.519 3.93008 106.205 2.49114 105.138C1.37047 104.307 0.697306 103.169 0.323086 101.842C0.0981325 101.044 0.00232825 100.228 0.00174299 99.4006C-0.000851848 95.7159 0.00028341 92.0313 6.48111e-05 88.3467C6.48111e-05 88.2895 6.48111e-05 88.2324 6.48111e-05 88.1662C1.45989 88.1662 2.90941 88.1662 4.37578 88.1662C4.37578 88.2266 4.37579 88.2831 4.37579 88.3396C4.37553 92.051 4.37465 95.7624 4.37577 99.4737C4.37592 99.979 4.42764 100.478 4.59512 100.959C4.93963 101.949 6.02962 102.364 6.92211 101.842C7.32115 101.609 7.51853 101.229 7.64168 100.804C7.76893 100.365 7.81114 99.9129 7.81122 99.457C7.81162 97.0154 7.81117 94.5739 7.81101 92.1323C7.811 92.0746 7.811 92.0169 7.811 91.9472C9.26794 91.9472 10.7172 91.9472 12.1872 91.9472Z" fill="#665CD1" />
                    <path d="M7.81283 130.719C7.81283 130.656 7.81282 130.599 7.81283 130.542C7.81295 128.105 7.81504 125.667 7.81177 123.23C7.81101 122.667 7.75821 122.109 7.54093 121.581C7.1485 120.627 5.90956 120.296 5.10759 120.931C4.74949 121.214 4.58057 121.615 4.50166 122.045C4.43218 122.424 4.37912 122.813 4.37822 123.197C4.36958 126.895 4.37354 130.593 4.37389 134.291C4.3739 134.357 4.37389 134.424 4.37389 134.5C2.91728 134.5 1.47125 134.5 0.00194168 134.5C0.00194168 134.458 0.00193405 134.411 0.00193405 134.365C0.00215912 130.613 -0.00486374 126.862 0.00653839 123.111C0.0105362 121.794 0.266401 120.525 0.913452 119.361C1.8218 117.727 3.21527 116.762 5.04795 116.436C6.14741 116.24 7.22999 116.317 8.27615 116.732C8.93424 116.993 9.49491 117.392 9.94061 117.946C9.95687 117.966 9.974 117.986 9.99373 118.009C10.1273 117.865 10.2506 117.719 10.3875 117.587C11.0364 116.961 11.824 116.6 12.7012 116.449C14.4481 116.147 16.0699 116.461 17.5089 117.528C18.6295 118.359 19.3027 119.497 19.6769 120.824C19.9019 121.622 19.9977 122.438 19.9983 123.265C20.0009 126.95 19.9997 130.635 19.9999 134.319C19.9999 134.376 19.9999 134.434 19.9999 134.5C18.5401 134.5 17.0906 134.5 15.6242 134.5C15.6242 134.439 15.6242 134.383 15.6242 134.326C15.6245 130.615 15.6253 126.904 15.6242 123.192C15.6241 122.687 15.5724 122.188 15.4049 121.707C15.0604 120.717 13.9704 120.302 13.0779 120.824C12.6788 121.057 12.4815 121.437 12.3583 121.862C12.2311 122.301 12.1889 122.753 12.1888 123.209C12.1884 125.651 12.1888 128.092 12.189 130.534C12.189 130.591 12.189 130.649 12.189 130.719C10.7321 130.719 9.28275 130.719 7.81283 130.719Z" fill="#665CD1" />
                    <path d="M20 154.245C19.9519 157.289 18.9735 159.742 16.9161 161.732C15.469 163.131 13.7348 164.003 11.742 164.34C9.31253 164.751 7.00743 164.381 4.88755 163.117C2.40539 161.636 0.864397 159.457 0.251969 156.651C-0.254537 154.331 -0.0070366 152.073 1.0818 149.953C2.57696 147.043 4.96339 145.239 8.20704 144.673C11.4468 144.107 14.339 144.93 16.7834 147.136C18.511 148.695 19.5294 150.655 19.8749 152.95C19.9495 153.446 19.9724 153.949 20 154.245ZM10.2216 149.116C9.1797 149.121 8.39356 149.3 7.6647 149.688C5.38775 150.9 4.27465 153.395 4.89061 155.887C5.53193 158.481 8.06851 160.204 10.709 159.839C13.0918 159.51 15.0414 157.464 15.2578 155.069C15.3773 153.747 15.0662 152.531 14.3014 151.447C13.2609 149.972 11.8321 149.176 10.2216 149.116Z" fill="#665CD1" />
                    <path d="M16.3411 191.205C18.2345 189.352 19.1378 187.079 19.1674 184.957C19.1717 182.909 18.8194 181.451 18.0891 180.088C17.1494 178.335 15.7807 177.01 13.988 176.128C12.2534 175.274 10.4176 175 8.50385 175.262C6.40182 175.55 4.60068 176.448 3.12768 177.964C1.46799 179.671 0.614023 181.732 0.510453 184.094C0.436977 185.77 0.783111 187.365 1.56498 188.857C2.50443 190.649 3.88528 192.007 5.71453 192.895C7.56918 193.795 9.52449 194.036 11.5524 193.668C13.3995 193.332 15.0052 192.513 16.3411 191.205Z" fill="#EBEBEB" fill-opacity="0.5" />
                    <path d="M20 184.99C19.9682 187.264 19.0004 189.698 16.9717 191.684C15.5404 193.086 13.82 193.963 11.841 194.322C9.66822 194.717 7.57325 194.459 5.58612 193.495C3.62621 192.543 2.14674 191.088 1.14018 189.168C0.302461 187.569 -0.0683971 185.86 0.0103272 184.065C0.121296 181.534 1.03626 179.326 2.8145 177.497C4.39271 175.873 6.32251 174.91 8.57468 174.602C10.6252 174.322 12.5921 174.615 14.4505 175.53C16.3713 176.475 17.8378 177.895 18.8446 179.773C19.6271 181.233 20.0045 182.795 20 184.99ZM9.83981 190.456C9.87177 190.369 9.88984 190.325 9.9038 190.281C10.3434 188.871 10.7836 187.461 11.2199 186.05C11.2502 185.952 11.2959 185.901 11.3978 185.87C12.2999 185.597 13.2001 185.319 14.1007 185.041C14.6708 184.866 15.2406 184.69 15.8365 184.505C15.7632 184.477 15.7154 184.456 15.6657 184.441C14.2453 184.003 12.8251 183.565 11.403 183.132C11.2944 183.099 11.2499 183.045 11.2185 182.943C10.7819 181.532 10.3412 180.123 9.90113 178.713C9.88771 178.67 9.86959 178.629 9.84233 178.556C9.81661 178.628 9.80231 178.663 9.79098 178.699C9.35069 180.109 8.90962 181.519 8.47267 182.93C8.43818 183.041 8.38708 183.101 8.26802 183.137C6.92453 183.544 5.5833 183.959 4.24157 184.373C4.11782 184.411 3.99473 184.451 3.84168 184.5C3.91526 184.525 3.95565 184.54 3.99676 184.552C5.41272 184.988 6.82822 185.425 8.2457 185.855C8.37739 185.895 8.43952 185.959 8.47891 186.09C8.68696 186.784 8.90659 187.474 9.12262 188.165C9.35723 188.915 9.5923 189.665 9.83981 190.456Z" fill="#665CD1" />
                    <path d="M7.81481 204.499C9.27691 204.499 10.7235 204.499 12.1838 204.499C12.1838 204.563 12.1838 204.619 12.1838 204.675C12.184 208.35 12.1835 212.026 12.1853 215.701C12.1855 216.237 12.2276 216.77 12.4053 217.281C12.5794 217.781 12.8742 218.171 13.4152 218.312C13.7687 218.405 14.1244 218.403 14.473 218.29C14.9929 218.121 15.2607 217.72 15.4228 217.229C15.5698 216.785 15.6205 216.323 15.6212 215.859C15.6272 212.139 15.6286 208.42 15.6314 204.7C15.6314 204.639 15.6314 204.577 15.6314 204.504C17.084 204.504 18.5302 204.504 19.9976 204.504C19.9976 204.548 19.9976 204.595 19.9976 204.641C19.9979 208.352 20.0042 212.063 19.995 215.773C19.9919 217.012 19.7887 218.22 19.2349 219.342C18.3418 221.153 16.8876 222.228 14.9016 222.569C13.8013 222.759 12.7188 222.675 11.6769 222.248C11.0278 221.983 10.4743 221.583 10.04 221.027C10.0291 221.013 10.0186 220.999 10.0255 221.008C9.7509 221.258 9.49784 221.525 9.20901 221.746C8.52782 222.264 7.73672 222.521 6.89491 222.615C5.51699 222.768 4.21083 222.533 3.00996 221.821C1.71201 221.052 0.887089 219.907 0.419655 218.489C0.149426 217.67 0.0135822 216.825 0.0114708 215.964C0.00217628 212.179 0.00277519 208.393 -3.05176e-05 204.607C-5.34058e-05 204.576 0.00246811 204.546 0.00432396 204.504C1.45356 204.504 2.89957 204.504 4.36855 204.504C4.36855 204.557 4.36854 204.617 4.36855 204.676C4.36878 208.334 4.36768 211.992 4.37082 215.649C4.37125 216.158 4.39648 216.667 4.55695 217.154C4.62927 217.374 4.72482 217.594 4.85357 217.785C5.18241 218.271 5.68053 218.408 6.23492 218.367C6.98946 218.311 7.44073 217.895 7.65457 217.089C7.77315 216.642 7.81346 216.185 7.81362 215.725C7.81488 212.045 7.81461 208.365 7.81481 204.685C7.81481 204.628 7.81481 204.571 7.81481 204.499Z" fill="#665CD1" />
                </svg>
            </section>

        </div>
    )

}

export default AnswersBlock
