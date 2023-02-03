import React, { } from 'react';
// import { Link } from 'react-router-dom';
import './SecurityBlock.scss';


const SecurityBlock = () => {

    return (
        <div className="securityBlock_container-parallax">

            <div className="securityBlock_container">

                <section className="securityBlock_container-title">
                    <svg width="152" height="71" viewBox="0 0 152 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.3066 32.9814C19.705 32.9814 17.131 32.9814 14.5326 32.9814C14.5326 32.8688 14.5326 32.7688 14.5326 32.6688C14.5322 26.1288 14.5331 19.5889 14.5301 13.049C14.5296 12.0953 14.4548 11.1479 14.1385 10.2386C13.8288 9.34848 13.3042 8.65512 12.3416 8.40307C11.7125 8.23834 11.0796 8.24224 10.4595 8.44312C9.53422 8.74282 9.05778 9.45724 8.76928 10.3303C8.50788 11.1214 8.41766 11.942 8.41632 12.7685C8.40559 19.3868 8.40319 26.0051 8.39825 32.6234C8.39817 32.7331 8.39824 32.8427 8.39824 32.9728C5.81352 32.9728 3.2403 32.9728 0.629224 32.9728C0.629224 32.8946 0.629229 32.8119 0.629223 32.7292C0.628757 26.1264 0.617435 19.5235 0.633923 12.9207C0.639427 10.7164 1.0009 8.56822 1.98637 6.57047C3.57548 3.34902 6.16302 1.43626 9.69682 0.828316C11.6546 0.491513 13.5808 0.641193 15.4345 1.39969C16.5895 1.87227 17.5745 2.58275 18.3472 3.57269C18.3666 3.59743 18.3852 3.62268 18.373 3.60659C18.8616 3.16094 19.3119 2.68587 19.8258 2.29437C21.0379 1.37106 22.4455 0.914311 23.9434 0.747512C26.3952 0.474487 28.7193 0.894008 30.8561 2.16014C33.1656 3.52862 34.6334 5.56556 35.4651 8.08804C35.9459 9.54632 36.1877 11.0497 36.1914 12.5812C36.208 19.3173 36.2069 26.0535 36.2119 32.7896C36.2119 32.8439 36.2074 32.8983 36.2041 32.9738C33.6254 32.9738 31.0525 32.9738 28.4387 32.9738C28.4387 32.8785 28.4387 32.7727 28.4387 32.6669C28.4383 26.1584 28.4402 19.6499 28.4346 13.1414C28.4339 12.2373 28.389 11.3303 28.1034 10.4637C27.9748 10.0732 27.8048 9.68076 27.5757 9.3418C26.9905 8.47607 26.1042 8.23293 25.1178 8.30633C23.7752 8.40624 22.9722 9.14565 22.5917 10.5803C22.3807 11.3759 22.309 12.1882 22.3087 13.0073C22.3065 19.5551 22.307 26.1029 22.3066 32.6507C22.3066 32.7523 22.3066 32.8539 22.3066 32.9814Z" fill="#FEFEFE" />
                        <path d="M74.2583 17.5765C74.2071 21.2747 72.6451 25.2349 69.3711 28.465C67.0613 30.7439 64.2849 32.1709 61.091 32.7556C57.5845 33.3975 54.2035 32.9781 50.9966 31.4093C47.8336 29.8619 45.446 27.4954 43.8216 24.3717C42.4696 21.772 41.8711 18.9927 41.9982 16.0726C42.1773 11.9567 43.6539 8.36557 46.5237 5.38977C49.0706 2.74873 52.185 1.18298 55.8197 0.681732C59.1289 0.225366 62.3031 0.703312 65.3024 2.19062C68.4022 3.72782 70.7689 6.03706 72.3938 9.09228C73.6565 11.4665 74.2656 14.0076 74.2583 17.5765ZM57.8614 26.4673C57.913 26.3255 57.9422 26.2547 57.9647 26.1819C58.6742 23.8888 59.3846 21.5959 60.0887 19.3011C60.1375 19.142 60.2113 19.0582 60.3757 19.0081C61.8315 18.5648 63.2844 18.1117 64.7379 17.6607C65.6579 17.3752 66.5774 17.0882 67.5391 16.7889C67.4208 16.7434 67.3437 16.7085 67.2635 16.6836C64.9711 15.972 62.6791 15.2588 60.3841 14.5556C60.2089 14.5019 60.1371 14.4134 60.0863 14.2481C59.3818 11.9535 58.6706 9.66096 57.9604 7.36813C57.9387 7.2982 57.9095 7.23063 57.8655 7.11319C57.824 7.22913 57.8009 7.28664 57.7826 7.34564C57.0721 9.63863 56.3602 11.9312 55.6551 14.2259C55.5994 14.407 55.5169 14.5041 55.3248 14.5629C53.1566 15.2258 50.9921 15.9008 48.8267 16.573C48.627 16.635 48.4284 16.7005 48.1814 16.7796C48.3001 16.8203 48.3653 16.8446 48.4316 16.8652C50.7168 17.5733 53.0012 18.2839 55.2888 18.9841C55.5013 19.0491 55.6016 19.1533 55.6651 19.3668C56.0009 20.4945 56.3553 21.6166 56.704 22.7405C57.0826 23.9609 57.462 25.1812 57.8614 26.4673Z" fill="#FEFEFE" />
                        <path d="M137.849 7.41419C137.849 7.52487 137.849 7.62576 137.849 7.72666C137.849 12.0264 137.845 16.3262 137.851 20.6259C137.852 21.6195 137.945 22.6048 138.328 23.5364C139.021 25.2192 141.207 25.8035 142.621 24.6829C143.253 24.1825 143.551 23.476 143.691 22.7165C143.813 22.0478 143.907 21.3627 143.908 20.6845C143.924 14.1603 143.917 7.63595 143.916 1.11166C143.916 0.994694 143.916 0.87773 143.916 0.743164C146.486 0.743164 149.037 0.743164 151.629 0.743164C151.629 0.817372 151.629 0.899441 151.629 0.98151C151.629 7.60013 151.641 14.2188 151.621 20.8373C151.614 23.1606 151.163 25.3993 150.021 27.4529C148.419 30.3358 145.96 32.0378 142.727 32.6135C140.787 32.9588 138.877 32.8229 137.031 32.091C135.87 31.6305 134.881 30.9272 134.095 29.9493C134.066 29.9136 134.036 29.8792 134.001 29.8379C133.765 30.092 133.548 30.3497 133.306 30.5827C132.162 31.6876 130.772 32.3232 129.224 32.5905C126.142 33.1227 123.281 32.5682 120.742 30.6864C118.765 29.2208 117.577 27.2131 116.917 24.8715C116.52 23.4638 116.351 22.0231 116.35 20.564C116.346 14.0633 116.348 7.56257 116.347 1.06186C116.347 0.961101 116.347 0.860346 116.347 0.743565C118.923 0.743565 121.48 0.743565 124.067 0.743565C124.067 0.850121 124.067 0.949788 124.067 1.04946C124.067 7.59733 124.065 14.1452 124.067 20.6931C124.068 21.5845 124.159 22.4655 124.454 23.3142C125.062 25.0601 126.985 25.7915 128.56 24.8713C129.264 24.4599 129.612 23.79 129.829 23.0399C130.054 22.2647 130.128 21.4678 130.128 20.6636C130.129 16.356 130.128 12.0484 130.128 7.74075C130.128 7.639 130.128 7.53726 130.128 7.41419C132.698 7.41419 135.255 7.41419 137.849 7.41419Z" fill="#FEFEFE" />
                        <path d="M111.501 16.3948C111.423 21.3428 109.843 25.3284 106.52 28.5628C104.184 30.8376 101.383 32.2548 98.1652 32.8022C94.242 33.4697 90.5196 32.8687 87.0964 30.8138C83.0881 28.4077 80.5997 24.865 79.6107 20.3049C78.7928 16.5335 79.1924 12.8642 80.9507 9.41924C83.3652 4.68867 87.2189 1.75743 92.4568 0.836689C97.6885 -0.0829487 102.359 1.25528 106.306 4.83996C109.096 7.37351 110.741 10.5595 111.299 14.29C111.419 15.0956 111.456 15.9136 111.501 16.3948ZM95.71 8.05821C94.0275 8.06561 92.758 8.35716 91.581 8.98764C87.9041 10.9572 86.1066 15.013 87.1013 19.063C88.137 23.2798 92.2331 26.0803 96.4971 25.4868C100.345 24.9513 103.493 21.6273 103.843 17.7345C104.036 15.5855 103.533 13.6093 102.298 11.8468C100.618 9.449 98.3107 8.15623 95.71 8.05821Z" fill="#FEFEFE" />
                        <path d="M39.4286 65.3486V46.521H46.2653C48.4196 46.521 50.2356 46.8949 51.7133 47.6426C53.2089 48.3726 54.3394 49.4408 55.105 50.8473C55.8706 52.236 56.2533 53.9274 56.2533 55.9215C56.2533 57.8977 55.8706 59.5891 55.105 60.9956C54.3394 62.4021 53.2089 63.4792 51.7133 64.227C50.2356 64.9748 48.4196 65.3486 46.2653 65.3486H39.4286ZM42.8737 62.4911H46.0517C48.3306 62.4911 50.022 61.9481 51.1258 60.862C52.2297 59.776 52.7816 58.1291 52.7816 55.9215C52.7816 53.696 52.2297 52.0491 51.1258 50.9809C50.022 49.8948 48.3306 49.3518 46.0517 49.3518H42.8737V62.4911ZM59.4772 65.3486V55.3072C59.4772 54.7375 59.4594 54.1589 59.4238 53.5713C59.406 52.9838 59.3615 52.4141 59.2903 51.8622H62.5217L62.8956 55.5476H62.3615C62.5395 54.6574 62.8333 53.9185 63.2428 53.331C63.6701 52.7435 64.1864 52.3073 64.7917 52.0224C65.3971 51.7375 66.0558 51.5951 66.768 51.5951C67.0884 51.5951 67.3466 51.6129 67.5424 51.6485C67.7383 51.6663 67.9341 51.7108 68.13 51.782L68.1032 54.7197C67.765 54.5773 67.4712 54.4882 67.222 54.4526C66.9905 54.417 66.6967 54.3992 66.3407 54.3992C65.5751 54.3992 64.9252 54.5595 64.3911 54.8799C63.8748 55.2004 63.4831 55.6455 63.2161 56.2152C62.9668 56.7849 62.8422 57.4348 62.8422 58.1647V65.3486H59.4772ZM69.9881 65.3486V51.8622H73.3263V65.3486H69.9881ZM69.8012 49.3251V46.067H73.5133V49.3251H69.8012ZM80.9039 65.3486L75.082 51.8622H78.6339L82.8534 62.411H82.0256L86.3519 51.8622H89.6902L83.8416 65.3486H80.9039ZM97.7334 65.6157C95.4723 65.6157 93.7008 64.9926 92.419 63.7463C91.1371 62.5 90.4961 60.7908 90.4961 58.6188C90.4961 57.2122 90.7721 55.9838 91.324 54.9333C91.8759 53.8829 92.6415 53.0639 93.6207 52.4764C94.6177 51.8889 95.775 51.5951 97.0925 51.5951C98.3922 51.5951 99.4782 51.8711 100.351 52.423C101.223 52.9749 101.882 53.7494 102.327 54.7464C102.79 55.7434 103.021 56.9096 103.021 58.2449V59.1262H93.1934V57.3636H100.644L100.19 57.7375C100.19 56.4912 99.9233 55.5387 99.3892 54.8799C98.8729 54.2212 98.1162 53.8918 97.1192 53.8918C96.0153 53.8918 95.1608 54.2835 94.5554 55.0669C93.9679 55.8502 93.6741 56.9452 93.6741 58.3517V58.6989C93.6741 60.1588 94.0302 61.2537 94.7424 61.9837C95.4723 62.6958 96.4961 63.0519 97.8135 63.0519C98.5791 63.0519 99.2913 62.954 99.95 62.7582C100.627 62.5445 101.268 62.2062 101.873 61.7433L102.861 63.9866C102.22 64.5029 101.454 64.9035 100.564 65.1884C99.6741 65.4733 98.7304 65.6157 97.7334 65.6157ZM105.821 65.3486V55.3072C105.821 54.7375 105.804 54.1589 105.768 53.5713C105.75 52.9838 105.706 52.4141 105.634 51.8622H108.866L109.24 55.5476H108.706C108.884 54.6574 109.177 53.9185 109.587 53.331C110.014 52.7435 110.53 52.3073 111.136 52.0224C111.741 51.7375 112.4 51.5951 113.112 51.5951C113.433 51.5951 113.691 51.6129 113.887 51.6485C114.082 51.6663 114.278 51.7108 114.474 51.782L114.447 54.7197C114.109 54.5773 113.815 54.4882 113.566 54.4526C113.335 54.417 113.041 54.3992 112.685 54.3992C111.919 54.3992 111.269 54.5595 110.735 54.8799C110.219 55.2004 109.827 55.6455 109.56 56.2152C109.311 56.7849 109.186 57.4348 109.186 58.1647V65.3486H105.821Z" fill="#FEFEFE" />
                    </svg>
                </section>

                <section className="securityBlock_wrap-content">

                    <div className="securityBlock_wrap-titles">
                        <h2 className="securityBlock_titles">Організація, контроль та безпека</h2>
                        <h2 className="securityBlock_title-text">Додаток для водіїв транспортних засобів</h2>
                    </div>

                    <section className="securityBlock_container-content">

                        <div className="securityBlock_wrap-text">

                            <section className="securityBlock_text">

                                <h3 className="securityBlock_text-title">Для юридичних/фізичних осіб</h3>

                                <div className="securityBlock-wrap">
                                    <svg className="securityBlock_img-star" width="20" height="20" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20 11.1723C19.9682 13.4462 19.0004 15.881 16.9717 17.867C15.5404 19.2682 13.82 20.1456 11.841 20.5051C9.66822 20.8997 7.57325 20.6419 5.58612 19.6773C3.62621 18.7259 2.14674 17.2709 1.14018 15.3503C0.302461 13.7519 -0.0683971 12.0431 0.0103272 10.2477C0.121296 7.71704 1.03626 5.50908 2.8145 3.67944C4.39271 2.05562 6.32251 1.09294 8.57468 0.784747C10.6252 0.504154 12.5921 0.798015 14.4505 1.71247C16.3713 2.65761 17.8378 4.07742 18.8446 5.95589C19.6271 7.41567 20.0045 8.97804 20 11.1723ZM9.83981 16.6388C9.87176 16.5516 9.88985 16.5081 9.90381 16.4633C10.3434 15.0534 10.7836 13.6436 11.2199 12.2327C11.2502 12.1349 11.2959 12.0833 11.3978 12.0525C12.2999 11.78 13.2001 11.5014 14.1007 11.2241C14.6708 11.0485 15.2406 10.8721 15.8365 10.6881C15.7632 10.6601 15.7154 10.6387 15.6657 10.6234C14.2453 10.1858 12.8251 9.74729 11.403 9.31496C11.2944 9.28196 11.2499 9.22752 11.2185 9.1259C10.7819 7.7151 10.3412 6.30554 9.90113 4.89581C9.88771 4.85282 9.86959 4.81128 9.84233 4.73907C9.81661 4.81035 9.80231 4.84571 9.79098 4.88199C9.35069 6.29181 8.90962 7.70139 8.47267 9.11224C8.43818 9.22362 8.38707 9.28332 8.26802 9.31944C6.92453 9.72706 5.5833 10.1421 4.24157 10.5554C4.11782 10.5935 3.99473 10.6337 3.84168 10.6824C3.91526 10.7074 3.95565 10.7223 3.99676 10.735C5.41272 11.1704 6.82822 11.6073 8.2457 12.0378C8.37739 12.0778 8.43952 12.1418 8.47891 12.2731C8.68696 12.9664 8.90659 13.6564 9.12262 14.3473C9.35723 15.0978 9.5923 15.848 9.83981 16.6388Z" fill="#665CD1" />
                                    </svg>

                                    <p className="securityBlock_text-list">Додавання водія до виставленого транпсорту</p>
                                </div>

                                <div className="securityBlock-wrap">
                                    <svg className="securityBlock_img-star" width="20" height="20" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20 11.1723C19.9682 13.4462 19.0004 15.881 16.9717 17.867C15.5404 19.2682 13.82 20.1456 11.841 20.5051C9.66822 20.8997 7.57325 20.6419 5.58612 19.6773C3.62621 18.7259 2.14674 17.2709 1.14018 15.3503C0.302461 13.7519 -0.0683971 12.0431 0.0103272 10.2477C0.121296 7.71704 1.03626 5.50908 2.8145 3.67944C4.39271 2.05562 6.32251 1.09294 8.57468 0.784747C10.6252 0.504154 12.5921 0.798015 14.4505 1.71247C16.3713 2.65761 17.8378 4.07742 18.8446 5.95589C19.6271 7.41567 20.0045 8.97804 20 11.1723ZM9.83981 16.6388C9.87176 16.5516 9.88985 16.5081 9.90381 16.4633C10.3434 15.0534 10.7836 13.6436 11.2199 12.2327C11.2502 12.1349 11.2959 12.0833 11.3978 12.0525C12.2999 11.78 13.2001 11.5014 14.1007 11.2241C14.6708 11.0485 15.2406 10.8721 15.8365 10.6881C15.7632 10.6601 15.7154 10.6387 15.6657 10.6234C14.2453 10.1858 12.8251 9.74729 11.403 9.31496C11.2944 9.28196 11.2499 9.22752 11.2185 9.1259C10.7819 7.7151 10.3412 6.30554 9.90113 4.89581C9.88771 4.85282 9.86959 4.81128 9.84233 4.73907C9.81661 4.81035 9.80231 4.84571 9.79098 4.88199C9.35069 6.29181 8.90962 7.70139 8.47267 9.11224C8.43818 9.22362 8.38707 9.28332 8.26802 9.31944C6.92453 9.72706 5.5833 10.1421 4.24157 10.5554C4.11782 10.5935 3.99473 10.6337 3.84168 10.6824C3.91526 10.7074 3.95565 10.7223 3.99676 10.735C5.41272 11.1704 6.82822 11.6073 8.2457 12.0378C8.37739 12.0778 8.43952 12.1418 8.47891 12.2731C8.68696 12.9664 8.90659 13.6564 9.12262 14.3473C9.35723 15.0978 9.5923 15.848 9.83981 16.6388Z" fill="#665CD1" />
                                    </svg>

                                    <p className="securityBlock_text-list">Відстеження водії на карті під час виконання замовлення та у вільний час</p>
                                </div>

                                <div className="securityBlock-wrap">
                                    <svg className="securityBlock_img-star" width="20" height="20" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20 11.1723C19.9682 13.4462 19.0004 15.881 16.9717 17.867C15.5404 19.2682 13.82 20.1456 11.841 20.5051C9.66822 20.8997 7.57325 20.6419 5.58612 19.6773C3.62621 18.7259 2.14674 17.2709 1.14018 15.3503C0.302461 13.7519 -0.0683971 12.0431 0.0103272 10.2477C0.121296 7.71704 1.03626 5.50908 2.8145 3.67944C4.39271 2.05562 6.32251 1.09294 8.57468 0.784747C10.6252 0.504154 12.5921 0.798015 14.4505 1.71247C16.3713 2.65761 17.8378 4.07742 18.8446 5.95589C19.6271 7.41567 20.0045 8.97804 20 11.1723ZM9.83981 16.6388C9.87176 16.5516 9.88985 16.5081 9.90381 16.4633C10.3434 15.0534 10.7836 13.6436 11.2199 12.2327C11.2502 12.1349 11.2959 12.0833 11.3978 12.0525C12.2999 11.78 13.2001 11.5014 14.1007 11.2241C14.6708 11.0485 15.2406 10.8721 15.8365 10.6881C15.7632 10.6601 15.7154 10.6387 15.6657 10.6234C14.2453 10.1858 12.8251 9.74729 11.403 9.31496C11.2944 9.28196 11.2499 9.22752 11.2185 9.1259C10.7819 7.7151 10.3412 6.30554 9.90113 4.89581C9.88771 4.85282 9.86959 4.81128 9.84233 4.73907C9.81661 4.81035 9.80231 4.84571 9.79098 4.88199C9.35069 6.29181 8.90962 7.70139 8.47267 9.11224C8.43818 9.22362 8.38707 9.28332 8.26802 9.31944C6.92453 9.72706 5.5833 10.1421 4.24157 10.5554C4.11782 10.5935 3.99473 10.6337 3.84168 10.6824C3.91526 10.7074 3.95565 10.7223 3.99676 10.735C5.41272 11.1704 6.82822 11.6073 8.2457 12.0378C8.37739 12.0778 8.43952 12.1418 8.47891 12.2731C8.68696 12.9664 8.90659 13.6564 9.12262 14.3473C9.35723 15.0978 9.5923 15.848 9.83981 16.6388Z" fill="#665CD1" />
                                    </svg>

                                    <p className="securityBlock_text-list">Контроль переписки та ходу виконання замовлення</p>
                                </div>

                                <div className="securityBlock-wrap">
                                    <svg className="securityBlock_img-star" width="20" height="20" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20 11.1723C19.9682 13.4462 19.0004 15.881 16.9717 17.867C15.5404 19.2682 13.82 20.1456 11.841 20.5051C9.66822 20.8997 7.57325 20.6419 5.58612 19.6773C3.62621 18.7259 2.14674 17.2709 1.14018 15.3503C0.302461 13.7519 -0.0683971 12.0431 0.0103272 10.2477C0.121296 7.71704 1.03626 5.50908 2.8145 3.67944C4.39271 2.05562 6.32251 1.09294 8.57468 0.784747C10.6252 0.504154 12.5921 0.798015 14.4505 1.71247C16.3713 2.65761 17.8378 4.07742 18.8446 5.95589C19.6271 7.41567 20.0045 8.97804 20 11.1723ZM9.83981 16.6388C9.87176 16.5516 9.88985 16.5081 9.90381 16.4633C10.3434 15.0534 10.7836 13.6436 11.2199 12.2327C11.2502 12.1349 11.2959 12.0833 11.3978 12.0525C12.2999 11.78 13.2001 11.5014 14.1007 11.2241C14.6708 11.0485 15.2406 10.8721 15.8365 10.6881C15.7632 10.6601 15.7154 10.6387 15.6657 10.6234C14.2453 10.1858 12.8251 9.74729 11.403 9.31496C11.2944 9.28196 11.2499 9.22752 11.2185 9.1259C10.7819 7.7151 10.3412 6.30554 9.90113 4.89581C9.88771 4.85282 9.86959 4.81128 9.84233 4.73907C9.81661 4.81035 9.80231 4.84571 9.79098 4.88199C9.35069 6.29181 8.90962 7.70139 8.47267 9.11224C8.43818 9.22362 8.38707 9.28332 8.26802 9.31944C6.92453 9.72706 5.5833 10.1421 4.24157 10.5554C4.11782 10.5935 3.99473 10.6337 3.84168 10.6824C3.91526 10.7074 3.95565 10.7223 3.99676 10.735C5.41272 11.1704 6.82822 11.6073 8.2457 12.0378C8.37739 12.0778 8.43952 12.1418 8.47891 12.2731C8.68696 12.9664 8.90659 13.6564 9.12262 14.3473C9.35723 15.0978 9.5923 15.848 9.83981 16.6388Z" fill="#665CD1" />
                                    </svg>

                                    <p className="securityBlock_text-list">Довіра від користувачів та захист транспротну</p>
                                </div>
                            </section>

                            <section className="securityBlock_text">

                                <h3 className="securityBlock_text-title">Для водіїв</h3>

                                <div className="securityBlock-wrap">
                                    <svg className="securityBlock_img-star" width="20" height="20" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20 11.1723C19.9682 13.4462 19.0004 15.881 16.9717 17.867C15.5404 19.2682 13.82 20.1456 11.841 20.5051C9.66822 20.8997 7.57325 20.6419 5.58612 19.6773C3.62621 18.7259 2.14674 17.2709 1.14018 15.3503C0.302461 13.7519 -0.0683971 12.0431 0.0103272 10.2477C0.121296 7.71704 1.03626 5.50908 2.8145 3.67944C4.39271 2.05562 6.32251 1.09294 8.57468 0.784747C10.6252 0.504154 12.5921 0.798015 14.4505 1.71247C16.3713 2.65761 17.8378 4.07742 18.8446 5.95589C19.6271 7.41567 20.0045 8.97804 20 11.1723ZM9.83981 16.6388C9.87176 16.5516 9.88985 16.5081 9.90381 16.4633C10.3434 15.0534 10.7836 13.6436 11.2199 12.2327C11.2502 12.1349 11.2959 12.0833 11.3978 12.0525C12.2999 11.78 13.2001 11.5014 14.1007 11.2241C14.6708 11.0485 15.2406 10.8721 15.8365 10.6881C15.7632 10.6601 15.7154 10.6387 15.6657 10.6234C14.2453 10.1858 12.8251 9.74729 11.403 9.31496C11.2944 9.28196 11.2499 9.22752 11.2185 9.1259C10.7819 7.7151 10.3412 6.30554 9.90113 4.89581C9.88771 4.85282 9.86959 4.81128 9.84233 4.73907C9.81661 4.81035 9.80231 4.84571 9.79098 4.88199C9.35069 6.29181 8.90962 7.70139 8.47267 9.11224C8.43818 9.22362 8.38707 9.28332 8.26802 9.31944C6.92453 9.72706 5.5833 10.1421 4.24157 10.5554C4.11782 10.5935 3.99473 10.6337 3.84168 10.6824C3.91526 10.7074 3.95565 10.7223 3.99676 10.735C5.41272 11.1704 6.82822 11.6073 8.2457 12.0378C8.37739 12.0778 8.43952 12.1418 8.47891 12.2731C8.68696 12.9664 8.90659 13.6564 9.12262 14.3473C9.35723 15.0978 9.5923 15.848 9.83981 16.6388Z" fill="#665CD1" />
                                    </svg>

                                    <p className="securityBlock_text-list">Корисні оповіщення про заявки на водійство, нове замовлення</p>
                                </div>

                                <div className="securityBlock-wrap">
                                    <svg className="securityBlock_img-star" width="20" height="20" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20 11.1723C19.9682 13.4462 19.0004 15.881 16.9717 17.867C15.5404 19.2682 13.82 20.1456 11.841 20.5051C9.66822 20.8997 7.57325 20.6419 5.58612 19.6773C3.62621 18.7259 2.14674 17.2709 1.14018 15.3503C0.302461 13.7519 -0.0683971 12.0431 0.0103272 10.2477C0.121296 7.71704 1.03626 5.50908 2.8145 3.67944C4.39271 2.05562 6.32251 1.09294 8.57468 0.784747C10.6252 0.504154 12.5921 0.798015 14.4505 1.71247C16.3713 2.65761 17.8378 4.07742 18.8446 5.95589C19.6271 7.41567 20.0045 8.97804 20 11.1723ZM9.83981 16.6388C9.87176 16.5516 9.88985 16.5081 9.90381 16.4633C10.3434 15.0534 10.7836 13.6436 11.2199 12.2327C11.2502 12.1349 11.2959 12.0833 11.3978 12.0525C12.2999 11.78 13.2001 11.5014 14.1007 11.2241C14.6708 11.0485 15.2406 10.8721 15.8365 10.6881C15.7632 10.6601 15.7154 10.6387 15.6657 10.6234C14.2453 10.1858 12.8251 9.74729 11.403 9.31496C11.2944 9.28196 11.2499 9.22752 11.2185 9.1259C10.7819 7.7151 10.3412 6.30554 9.90113 4.89581C9.88771 4.85282 9.86959 4.81128 9.84233 4.73907C9.81661 4.81035 9.80231 4.84571 9.79098 4.88199C9.35069 6.29181 8.90962 7.70139 8.47267 9.11224C8.43818 9.22362 8.38707 9.28332 8.26802 9.31944C6.92453 9.72706 5.5833 10.1421 4.24157 10.5554C4.11782 10.5935 3.99473 10.6337 3.84168 10.6824C3.91526 10.7074 3.95565 10.7223 3.99676 10.735C5.41272 11.1704 6.82822 11.6073 8.2457 12.0378C8.37739 12.0778 8.43952 12.1418 8.47891 12.2731C8.68696 12.9664 8.90659 13.6564 9.12262 14.3473C9.35723 15.0978 9.5923 15.848 9.83981 16.6388Z" fill="#665CD1" />
                                    </svg>

                                    <p className="securityBlock_text-list">Карта навігатор з прокладанням найзручніших маршрутів</p>
                                </div>

                                <div className="securityBlock-wrap">
                                    <svg className="securityBlock_img-star" width="20" height="20" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20 11.1723C19.9682 13.4462 19.0004 15.881 16.9717 17.867C15.5404 19.2682 13.82 20.1456 11.841 20.5051C9.66822 20.8997 7.57325 20.6419 5.58612 19.6773C3.62621 18.7259 2.14674 17.2709 1.14018 15.3503C0.302461 13.7519 -0.0683971 12.0431 0.0103272 10.2477C0.121296 7.71704 1.03626 5.50908 2.8145 3.67944C4.39271 2.05562 6.32251 1.09294 8.57468 0.784747C10.6252 0.504154 12.5921 0.798015 14.4505 1.71247C16.3713 2.65761 17.8378 4.07742 18.8446 5.95589C19.6271 7.41567 20.0045 8.97804 20 11.1723ZM9.83981 16.6388C9.87176 16.5516 9.88985 16.5081 9.90381 16.4633C10.3434 15.0534 10.7836 13.6436 11.2199 12.2327C11.2502 12.1349 11.2959 12.0833 11.3978 12.0525C12.2999 11.78 13.2001 11.5014 14.1007 11.2241C14.6708 11.0485 15.2406 10.8721 15.8365 10.6881C15.7632 10.6601 15.7154 10.6387 15.6657 10.6234C14.2453 10.1858 12.8251 9.74729 11.403 9.31496C11.2944 9.28196 11.2499 9.22752 11.2185 9.1259C10.7819 7.7151 10.3412 6.30554 9.90113 4.89581C9.88771 4.85282 9.86959 4.81128 9.84233 4.73907C9.81661 4.81035 9.80231 4.84571 9.79098 4.88199C9.35069 6.29181 8.90962 7.70139 8.47267 9.11224C8.43818 9.22362 8.38707 9.28332 8.26802 9.31944C6.92453 9.72706 5.5833 10.1421 4.24157 10.5554C4.11782 10.5935 3.99473 10.6337 3.84168 10.6824C3.91526 10.7074 3.95565 10.7223 3.99676 10.735C5.41272 11.1704 6.82822 11.6073 8.2457 12.0378C8.37739 12.0778 8.43952 12.1418 8.47891 12.2731C8.68696 12.9664 8.90659 13.6564 9.12262 14.3473C9.35723 15.0978 9.5923 15.848 9.83981 16.6388Z" fill="#665CD1" />
                                    </svg>

                                    <p className="securityBlock_text-list">Організація замовлень та чат із замовником для обговорення деталей</p>
                                </div>

                                <div className="securityBlock-wrap">
                                    <svg className="securityBlock_img-star" width="20" height="20" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20 11.1723C19.9682 13.4462 19.0004 15.881 16.9717 17.867C15.5404 19.2682 13.82 20.1456 11.841 20.5051C9.66822 20.8997 7.57325 20.6419 5.58612 19.6773C3.62621 18.7259 2.14674 17.2709 1.14018 15.3503C0.302461 13.7519 -0.0683971 12.0431 0.0103272 10.2477C0.121296 7.71704 1.03626 5.50908 2.8145 3.67944C4.39271 2.05562 6.32251 1.09294 8.57468 0.784747C10.6252 0.504154 12.5921 0.798015 14.4505 1.71247C16.3713 2.65761 17.8378 4.07742 18.8446 5.95589C19.6271 7.41567 20.0045 8.97804 20 11.1723ZM9.83981 16.6388C9.87176 16.5516 9.88985 16.5081 9.90381 16.4633C10.3434 15.0534 10.7836 13.6436 11.2199 12.2327C11.2502 12.1349 11.2959 12.0833 11.3978 12.0525C12.2999 11.78 13.2001 11.5014 14.1007 11.2241C14.6708 11.0485 15.2406 10.8721 15.8365 10.6881C15.7632 10.6601 15.7154 10.6387 15.6657 10.6234C14.2453 10.1858 12.8251 9.74729 11.403 9.31496C11.2944 9.28196 11.2499 9.22752 11.2185 9.1259C10.7819 7.7151 10.3412 6.30554 9.90113 4.89581C9.88771 4.85282 9.86959 4.81128 9.84233 4.73907C9.81661 4.81035 9.80231 4.84571 9.79098 4.88199C9.35069 6.29181 8.90962 7.70139 8.47267 9.11224C8.43818 9.22362 8.38707 9.28332 8.26802 9.31944C6.92453 9.72706 5.5833 10.1421 4.24157 10.5554C4.11782 10.5935 3.99473 10.6337 3.84168 10.6824C3.91526 10.7074 3.95565 10.7223 3.99676 10.735C5.41272 11.1704 6.82822 11.6073 8.2457 12.0378C8.37739 12.0778 8.43952 12.1418 8.47891 12.2731C8.68696 12.9664 8.90659 13.6564 9.12262 14.3473C9.35723 15.0978 9.5923 15.848 9.83981 16.6388Z" fill="#665CD1" />
                                    </svg>

                                    <p className="securityBlock_text-list">Додавання проміжних точок між головними точками загрузки та вигрузки</p>
                                </div>
                            </section>

                        </div>

                        <section className="securityBlock_container-picture"></section>

                    </section>

                </section>

                <h2 className="securityBlock_container-soon">Скоро</h2>

            </div>

        </div >
    )
}
export default SecurityBlock