import React, { useState } from 'react'
import { Icon } from '@iconify/react'

const Register = () => {
    const [isRevealPwd, setIsRevealPwd] = useState(false);
    return (
        <>
            <form autoComplete="off">
                <div className="sa-login">
                    <div className="sa-frm-group">
                        <label className="sa-frm-label">Email</label>
                        <input type="email" className="sa-frm-control"/>
                    </div>
                    <div className="sa-frm-group">
                        <label className="sa-frm-label">Password</label>
                        <div className="sa-input-group">
                            <input type={isRevealPwd ? "text" : "password"} className="sa-frm-control"/>
                            <div class="sa-input-group-text" onClick={() => setIsRevealPwd(prevState => !prevState)}>
                                {isRevealPwd ? <Icon icon="iconamoon:eye-duotone" width="26" height="26" /> : <Icon icon="iconamoon:eye-off-duotone" width="26" height="26" />}
                            </div>
                        </div>
                    </div>
                    <div className="sa-frm-group">
                        <label className="sa-frm-label">Referral ID (Optional)</label>
                        <input type="number" className="sa-frm-control"/>
                    </div>
                    <div className="sa-content-btn">
                        <button type="submit" class="sa-btn-login">Create Account</button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Register