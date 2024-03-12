import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Icon } from '@iconify/react';
import http from '../services/api.js'

const Home = () => {
    // const [listCoin, setListCoin] = useState()
    // const apiKey = 'vmPUZE6mv9SD5VNHk4HlWFsOr6aKE2zvsw0MuIgwCIPy6utIco14y7Ju91duEh8A';
    // const secretKey = 'NhqPtmdSJYdKjVHjA7PZj4Mge3R5YNiP1e3UZjInClVN65XAbvqqM6A7H5fATj0j';

    // const fetchCoin = async () => {
    //     try {
    //         const response = await http.get('api/v3/ticker/price', {
    //             params: {
    //                 symbol: 'BTCUSDT',
    //                 apiKey: apiKey
    //             }
    //         })
    //         console.log(response.data)
    //         setListCoin(response.data)
    //     } catch (error) {
    //         console.error('Error fetching data:', error)
    //     }
    // }

    // useEffect(() => {
    //     fetchCoin()
    // }, [])
    return (
        <>
            <div className="banner">
                <Swiper
                    slidesPerView={1}
                >
                    <SwiperSlide>
                        <img src="https://www.siamblockchaincompany.com/Upload/public/65a7e6f9ca22a.jpg" alt=""/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://www.siamblockchaincompany.com/Upload/public/65e326a3bcb5b.jpg" alt=""/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://www.siamblockchaincompany.com/Upload/public/65a7e6ff885c8.jpg" alt=""/>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="card-option1">
                <div className="option-box">
                    <Link to="/deposit">
                        <div className="option-item">
                            <div className="option-icon">
                                <Icon icon="solar:cash-out-line-duotone" width="26" height="26" />
                            </div>
                            <div className="option-text"><span>Deposit</span></div>
                        </div>
                    </Link>
                    <Link to="/withdraw">
                        <div className="option-item">
                            <div className="option-icon">
                                <Icon icon="ph:rocket-duotone" width="26" height="26" />
                            </div>
                            <div className="option-text"><span>Withdraw</span></div>
                        </div>
                    </Link>
                    <Link to="">
                        <div className="option-item">
                            <div className="option-icon">
                                <Icon icon="ph:gavel-duotone" width="26" height="26" />
                            </div>
                            <div className="option-text"><span>Machine</span></div>
                        </div>
                    </Link>
                    <Link to="">
                        <div className="option-item">
                            <div className="option-icon">
                                <img src="https://www.siamblockchaincompany.com/Public/Static/img/Lemon8_icon.png" alt=""/>
                            </div>
                            <div className="option-text"><span>Lemon8</span></div>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="card-option2">
                <div className="price-box">
                    <div className="price-content">
                        <div className="price-cell"><span>BTC</span></div>
                        <div className="price-cell"><span>68462.42</span></div>
                        <div className="price-cell"><span className="cred">-1.06%</span></div>
                    </div>
                    <div className="price-content">
                        <div className="price-cell"><span>BCH</span></div>
                        <div className="price-cell"><span>416.14</span></div>
                        <div className="price-cell"><span className="cgreen">+1.67%</span></div>
                    </div>
                    <div className="price-content">
                        <div className="price-cell"><span>JST</span></div>
                        <div className="price-cell"><span>68462.42</span></div>
                        <div className="price-cell"><span className="cred">-1.06%</span></div>
                    </div>
                </div>
                <div className="alert-notice">
                    <div className="alert-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
                        </svg>
                    </div>
                    <div className="alert-list">
                        <div className="alert-item">User account : Drpdo**** Earn profit 100$</div>
                    </div>
                </div>
            </div>
            <div className="market">
                <div className="market-head">
                    <div className="market-row">
                        <div className="market-cell"><span>Symbol</span></div>
                        <div className="market-cell"><span>Price</span></div>
                        <div className="market-cell"><span>Change % 24h</span></div>
                    </div>
                </div>
                <div className="market-body">
                    <Link to="">
                        <div className="market-row">
                            <div className="market-cell">
                                <img src="https://www.siamblockchaincompany.com/xm/1613786496962262.png" alt=""/>
                                <span>BTC</span>
                            </div>
                            <div className="market-cell"><span>68311.92</span></div>
                            <div className="market-cell"><span className="cred">-1.26%</span></div>
                        </div>
                    </Link>
                    <Link to="">
                        <div className="market-row">
                            <div className="market-cell">
                                <img src="https://www.siamblockchaincompany.com/xm/1613786513998262.png" alt=""/>
                                <span>ETH</span>
                            </div>
                            <div className="market-cell"><span>68311.92</span></div>
                            <div className="market-cell"><span className="cgreen">+0.8%</span></div>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Home