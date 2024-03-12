import React from 'react'
import { Link } from 'react-router-dom'

const Markets = () => {
    return (
        <>
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

export default Markets