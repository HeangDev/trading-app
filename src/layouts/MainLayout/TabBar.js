import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react';

const TabBar = () => {
    return (
        <>
            <div className="tabbar">
                <div className="tabbar-content">
                    <Link to="" className="appbar-item">
                        <Icon icon="lets-icons:home-duotone" width="26" height="26" />
                        <span>Home</span>
                    </Link>
                    <Link to="" className="appbar-item">
                        <Icon icon="solar:chart-2-bold-duotone" width="26" height="26" />
                        <span>Markets</span>
                    </Link>
                    <Link to="" className="appbar-item">
                        <Icon icon="lets-icons:pipe-duotone" width="26" height="26" />
                        <span>Futures</span>
                    </Link>
                    <Link to="" className="appbar-item">
                        <Icon icon="ph:wechat-logo-duotone" width="26" height="26" />
                        <span>Chat</span>
                    </Link>
                    <Link to="" className="appbar-item">
                        <Icon icon="solar:user-line-duotone" width="26" height="26" />
                        <span>Account</span>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default TabBar