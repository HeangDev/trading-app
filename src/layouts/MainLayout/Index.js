import React from 'react'
import Header from './Header'
import TabBar from './TabBar'

const Index = ({ children }) => {
    return (
        <>
            <div className="wrapper">
                <Header/>
                <div className="content">
                    {children}
                </div>
                <TabBar/>
            </div>
        </>
    )
}

export default Index