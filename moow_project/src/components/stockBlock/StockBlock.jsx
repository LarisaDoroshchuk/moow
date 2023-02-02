import React, { } from 'react';
// import { Link } from 'react-router-dom';
import './StockBlock.scss';

const StockBlock = () => {

    return (
        <div className="stockBlock_container">

            <section className="stockBlock_wrapper">
                <h2 className="stockBlock-title">Знижка на послуги MOOW до 12.12</h2>

                <section className="stockList-wrap">

                    <section className="stockList_item">
                        <div className="stockList_container img_warehouse"></div>
                        <p className="stockList_stick-advertise">Рекламовано</p>

                        <svg className="stockList_stick-best" width="25" height="24" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M26.4522 12.7719L23.5089 9.50406L23.9697 5.12926L19.6659 4.2181L17.4704 0.404297L13.4523 2.20008L9.43407 0.404297L7.23867 4.2181L2.93479 5.12926L3.39558 9.50406L0.452271 12.7719L3.39553 16.0397L2.93474 20.4145L7.23861 21.3257L9.43402 25.1395L13.4522 23.3437L17.4704 25.1395L19.6658 21.3257L23.9697 20.4145L23.5088 16.0397L26.4522 12.7719ZM18.9021 9.92545L12.3767 17.2363L7.84217 12.7018L8.92071 11.6233L12.3137 15.0162L17.7642 8.90975L18.9021 9.92545Z" fill="#665CD1" />
                        </svg>

                        <section className="stockList_item-comtent">
                            <div className="item-comtent_inform">
                                <p className="item-comtent_inform-warehouse">Склад 1</p>
                                <p className="item-comtent_inform-price">300 грн/кв.м.
                                    <sup className="item-comtent_inform-sup">Мін.ціна</sup>
                                </p>
                            </div>

                            <div className="item-comtent_statistics">

                                <div className="item-comtent_statistics-wrap">
                                    <svg className="item-comtent_statistics-text" width="15" height="15" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.50935 0.439423C7.71823 0.0461376 8.28176 0.046137 8.49065 0.439422L10.3273 3.89759C10.4076 4.04878 10.5532 4.1545 10.7218 4.18415L14.5782 4.86233C15.0168 4.93945 15.191 5.4754 14.8815 5.79559L12.1601 8.61102C12.0412 8.73412 11.9856 8.90519 12.0095 9.0747L12.5562 12.952C12.6184 13.3929 12.1625 13.7242 11.7623 13.5288L8.24377 11.8107C8.08994 11.7355 7.91006 11.7355 7.75623 11.8107L4.23765 13.5288C3.8375 13.7242 3.38159 13.393 3.44377 12.952L3.99051 9.0747C4.01441 8.90519 3.95883 8.73412 3.83985 8.61102L1.11851 5.79559C0.809025 5.4754 0.983165 4.93945 1.42175 4.86233L5.27823 4.18415C5.44683 4.1545 5.59236 4.04878 5.67266 3.89759L7.50935 0.439423Z" fill="#665CD1" />
                                    </svg>
                                    <p className="item-comtent_statistics-text">4.8</p>
                                </div>

                                <div className="item-comtent_statistics-wrap">
                                    <svg className="item-comtent_statistics-text" width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.416687 5.51595C0.416687 5.51595 2.08335 2.18262 5.00002 2.18262C7.91669 2.18262 9.58335 5.51595 9.58335 5.51595C9.58335 5.51595 7.91669 8.84928 5.00002 8.84928C2.08335 8.84928 0.416687 5.51595 0.416687 5.51595Z" stroke="#5A5A5A" stroke-width="0.833333" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M5 6.76562C5.69036 6.76562 6.25 6.20598 6.25 5.51562C6.25 4.82527 5.69036 4.26562 5 4.26562C4.30964 4.26562 3.75 4.82527 3.75 5.51562C3.75 6.20598 4.30964 6.76562 5 6.76562Z" stroke="#5A5A5A" stroke-width="0.833333" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                                    <p className="item-comtent_statistics-text">12 тис.</p>
                                </div>



                            </div>
                        </section>

                    </section>

                    <section className="stockList_item">
                        <div className="stockList_container img_truck"></div>
                        <p className="stockList_stick-advertise">Рекламовано</p>
                        <p className="stockList_stick-verified">Перевірено</p>

                        <svg className="stockList_stick-best" width="25" height="24" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M26.4522 12.7719L23.5089 9.50406L23.9697 5.12926L19.6659 4.2181L17.4704 0.404297L13.4523 2.20008L9.43407 0.404297L7.23867 4.2181L2.93479 5.12926L3.39558 9.50406L0.452271 12.7719L3.39553 16.0397L2.93474 20.4145L7.23861 21.3257L9.43402 25.1395L13.4522 23.3437L17.4704 25.1395L19.6658 21.3257L23.9697 20.4145L23.5088 16.0397L26.4522 12.7719ZM18.9021 9.92545L12.3767 17.2363L7.84217 12.7018L8.92071 11.6233L12.3137 15.0162L17.7642 8.90975L18.9021 9.92545Z" fill="#665CD1" />
                        </svg>

                        <section className="stockList_item-comtent">
                            <div className="item-comtent_inform">
                                <p className="item-comtent_inform-warehouse">Склад 1</p>
                                <p className="item-comtent_inform-price">300 грн/кв.м.
                                    <sup className="item-comtent_inform-sup">Мін.ціна</sup>
                                </p>
                            </div>

                            <div className="item-comtent_statistics">

                                <div className="item-comtent_statistics-wrap">
                                    <svg className="item-comtent_statistics-text" width="15" height="15" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.50935 0.439423C7.71823 0.0461376 8.28176 0.046137 8.49065 0.439422L10.3273 3.89759C10.4076 4.04878 10.5532 4.1545 10.7218 4.18415L14.5782 4.86233C15.0168 4.93945 15.191 5.4754 14.8815 5.79559L12.1601 8.61102C12.0412 8.73412 11.9856 8.90519 12.0095 9.0747L12.5562 12.952C12.6184 13.3929 12.1625 13.7242 11.7623 13.5288L8.24377 11.8107C8.08994 11.7355 7.91006 11.7355 7.75623 11.8107L4.23765 13.5288C3.8375 13.7242 3.38159 13.393 3.44377 12.952L3.99051 9.0747C4.01441 8.90519 3.95883 8.73412 3.83985 8.61102L1.11851 5.79559C0.809025 5.4754 0.983165 4.93945 1.42175 4.86233L5.27823 4.18415C5.44683 4.1545 5.59236 4.04878 5.67266 3.89759L7.50935 0.439423Z" fill="#665CD1" />
                                    </svg>
                                    <p className="item-comtent_statistics-text">4.8</p>
                                </div>

                                <div className="item-comtent_statistics-wrap">
                                    <svg className="item-comtent_statistics-text" width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.416687 5.51595C0.416687 5.51595 2.08335 2.18262 5.00002 2.18262C7.91669 2.18262 9.58335 5.51595 9.58335 5.51595C9.58335 5.51595 7.91669 8.84928 5.00002 8.84928C2.08335 8.84928 0.416687 5.51595 0.416687 5.51595Z" stroke="#5A5A5A" stroke-width="0.833333" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M5 6.76562C5.69036 6.76562 6.25 6.20598 6.25 5.51562C6.25 4.82527 5.69036 4.26562 5 4.26562C4.30964 4.26562 3.75 4.82527 3.75 5.51562C3.75 6.20598 4.30964 6.76562 5 6.76562Z" stroke="#5A5A5A" stroke-width="0.833333" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                                    <p className="item-comtent_statistics-text">12 тис.</p>
                                </div>



                            </div>
                        </section>

                    </section>

                    <section className="stockList_item">
                        <div className="stockList_container img_tractor"></div>
                        <p className="stockList_stick-advertise">Рекламовано</p>

                        <svg className="stockList_stick-best" width="25" height="24" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M26.4522 12.7719L23.5089 9.50406L23.9697 5.12926L19.6659 4.2181L17.4704 0.404297L13.4523 2.20008L9.43407 0.404297L7.23867 4.2181L2.93479 5.12926L3.39558 9.50406L0.452271 12.7719L3.39553 16.0397L2.93474 20.4145L7.23861 21.3257L9.43402 25.1395L13.4522 23.3437L17.4704 25.1395L19.6658 21.3257L23.9697 20.4145L23.5088 16.0397L26.4522 12.7719ZM18.9021 9.92545L12.3767 17.2363L7.84217 12.7018L8.92071 11.6233L12.3137 15.0162L17.7642 8.90975L18.9021 9.92545Z" fill="#665CD1" />
                        </svg>

                        <section className="stockList_item-comtent">
                            <div className="item-comtent_inform">
                                <p className="item-comtent_inform-warehouse">Склад 1</p>
                                <p className="item-comtent_inform-price">300 грн/кв.м.
                                    <sup className="item-comtent_inform-sup">Мін.ціна</sup>
                                </p>
                            </div>

                            <div className="item-comtent_statistics">

                                <div className="item-comtent_statistics-wrap">
                                    <svg className="item-comtent_statistics-text" width="15" height="15" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.50935 0.439423C7.71823 0.0461376 8.28176 0.046137 8.49065 0.439422L10.3273 3.89759C10.4076 4.04878 10.5532 4.1545 10.7218 4.18415L14.5782 4.86233C15.0168 4.93945 15.191 5.4754 14.8815 5.79559L12.1601 8.61102C12.0412 8.73412 11.9856 8.90519 12.0095 9.0747L12.5562 12.952C12.6184 13.3929 12.1625 13.7242 11.7623 13.5288L8.24377 11.8107C8.08994 11.7355 7.91006 11.7355 7.75623 11.8107L4.23765 13.5288C3.8375 13.7242 3.38159 13.393 3.44377 12.952L3.99051 9.0747C4.01441 8.90519 3.95883 8.73412 3.83985 8.61102L1.11851 5.79559C0.809025 5.4754 0.983165 4.93945 1.42175 4.86233L5.27823 4.18415C5.44683 4.1545 5.59236 4.04878 5.67266 3.89759L7.50935 0.439423Z" fill="#665CD1" />
                                    </svg>
                                    <p className="item-comtent_statistics-text">4.8</p>
                                </div>

                                <div className="item-comtent_statistics-wrap">
                                    <svg className="item-comtent_statistics-text" width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.416687 5.51595C0.416687 5.51595 2.08335 2.18262 5.00002 2.18262C7.91669 2.18262 9.58335 5.51595 9.58335 5.51595C9.58335 5.51595 7.91669 8.84928 5.00002 8.84928C2.08335 8.84928 0.416687 5.51595 0.416687 5.51595Z" stroke="#5A5A5A" stroke-width="0.833333" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M5 6.76562C5.69036 6.76562 6.25 6.20598 6.25 5.51562C6.25 4.82527 5.69036 4.26562 5 4.26562C4.30964 4.26562 3.75 4.82527 3.75 5.51562C3.75 6.20598 4.30964 6.76562 5 6.76562Z" stroke="#5A5A5A" stroke-width="0.833333" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                                    <p className="item-comtent_statistics-text">12 тис.</p>
                                </div>



                            </div>
                        </section>

                    </section>

                    <section className="stockList_item">
                        <div className="stockList_container img_corn"></div>
                        <p className="stockList_stick-advertise">Рекламовано</p>

                        <svg className="stockList_stick-best" width="25" height="24" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M26.4522 12.7719L23.5089 9.50406L23.9697 5.12926L19.6659 4.2181L17.4704 0.404297L13.4523 2.20008L9.43407 0.404297L7.23867 4.2181L2.93479 5.12926L3.39558 9.50406L0.452271 12.7719L3.39553 16.0397L2.93474 20.4145L7.23861 21.3257L9.43402 25.1395L13.4522 23.3437L17.4704 25.1395L19.6658 21.3257L23.9697 20.4145L23.5088 16.0397L26.4522 12.7719ZM18.9021 9.92545L12.3767 17.2363L7.84217 12.7018L8.92071 11.6233L12.3137 15.0162L17.7642 8.90975L18.9021 9.92545Z" fill="#665CD1" />
                        </svg>

                        <section className="stockList_item-comtent">
                            <div className="item-comtent_inform">
                                <p className="item-comtent_inform-warehouse">Склад 1</p>
                                <p className="item-comtent_inform-price">300 грн/кв.м.
                                    <sup className="item-comtent_inform-sup">Мін.ціна</sup>
                                </p>
                            </div>

                            <div className="item-comtent_statistics">

                                <div className="item-comtent_statistics-wrap">
                                    <svg className="item-comtent_statistics-text" width="15" height="15" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.50935 0.439423C7.71823 0.0461376 8.28176 0.046137 8.49065 0.439422L10.3273 3.89759C10.4076 4.04878 10.5532 4.1545 10.7218 4.18415L14.5782 4.86233C15.0168 4.93945 15.191 5.4754 14.8815 5.79559L12.1601 8.61102C12.0412 8.73412 11.9856 8.90519 12.0095 9.0747L12.5562 12.952C12.6184 13.3929 12.1625 13.7242 11.7623 13.5288L8.24377 11.8107C8.08994 11.7355 7.91006 11.7355 7.75623 11.8107L4.23765 13.5288C3.8375 13.7242 3.38159 13.393 3.44377 12.952L3.99051 9.0747C4.01441 8.90519 3.95883 8.73412 3.83985 8.61102L1.11851 5.79559C0.809025 5.4754 0.983165 4.93945 1.42175 4.86233L5.27823 4.18415C5.44683 4.1545 5.59236 4.04878 5.67266 3.89759L7.50935 0.439423Z" fill="#665CD1" />
                                    </svg>
                                    <p className="item-comtent_statistics-text">4.8</p>
                                </div>

                                <div className="item-comtent_statistics-wrap">
                                    <svg className="item-comtent_statistics-text" width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.416687 5.51595C0.416687 5.51595 2.08335 2.18262 5.00002 2.18262C7.91669 2.18262 9.58335 5.51595 9.58335 5.51595C9.58335 5.51595 7.91669 8.84928 5.00002 8.84928C2.08335 8.84928 0.416687 5.51595 0.416687 5.51595Z" stroke="#5A5A5A" stroke-width="0.833333" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M5 6.76562C5.69036 6.76562 6.25 6.20598 6.25 5.51562C6.25 4.82527 5.69036 4.26562 5 4.26562C4.30964 4.26562 3.75 4.82527 3.75 5.51562C3.75 6.20598 4.30964 6.76562 5 6.76562Z" stroke="#5A5A5A" stroke-width="0.833333" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                                    <p className="item-comtent_statistics-text">12 тис.</p>
                                </div>



                            </div>
                        </section>

                    </section>

                </section>

            </section>

        </div >
    )
}

export default StockBlock
