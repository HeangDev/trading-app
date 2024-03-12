import React from 'react'

const LoginLayout = ({ children }) => {
    return (
        <>
            <div className="wrapper">
                <div className="sa-content-login">
                    {children}
                </div>
            </div>
        </>
    )
}

export default LoginLayout