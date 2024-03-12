import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Icon } from '@iconify/react'

const Login = () => {
    const { register, handleSubmit, watch, formState: {errors} } = useForm();
    const [isRevealPwd, setIsRevealPwd] = useState(false);
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    return (
        <>
            <form
                autoComplete="off"
                onSubmit={handleSubmit(() => {

                })}>
                <div className="sa-login">
                    <div className="sa-frm-group">
                        <label className="sa-frm-label">Username</label>
                        <input
                            type="text" className="sa-frm-control"
                            {...register("username",{
                                required: "Username is required.",
                            })}
                            onChange={(e) => setUsername(e.target.value)}
                        />
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
                    <div className="sa-content-btn">
                        <button type="submit" class="sa-btn-login">Log In</button>
                    </div>
                    <div className="sa-theme-text">
                        <span></span>
                        <p>or</p>
                        <span></span>
                    </div>
                    <div className="sa-auth-btn">
                        <button type="button" class="sa-btn-google">
                            <Icon icon="logos:google-icon" width="26" height="26" />
                            <span>Continue with Google</span>
                        </button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Login