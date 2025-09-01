import { useState } from "react";
import "./auth.scss";

function Auth(props) {
    let [ isLogin, switchToSignup ] = useState(true)
    
    return (
        <div className=" auth-container">
            <div className="container login-signup-form">
                <div className="left-section-login-signup">
                    <img src="" alt="" className="image-fluid" />
                </div>
                <div className="right-section-login-signup">
                    {
                    isLogin && <div class="form-box">
                        <h2 className="login-title">Login</h2>
                        <form>
                            <div class="input-group">
                                <label htmlFor="login-email">Email</label>
                                <input type="email" id="login-email" required />
                            </div>  
                            <div class="input-group">
                                <label htmlFor="login-password">Password</label>
                                <input type="password" id="login-password" required />
                            </div>
                            <button type="submit" class="login-btn">Login</button>
                            <div class="extra">
                                <a onClick={ ()=> switchToSignup(false) }>Don't have an account? </a>
                                <a >Forgot Password?</a>
                            </div>
                        </form>
                    </div>
                }

                {
                    !isLogin && <div class="form-box">
                        <h2 className="login-title">Signup</h2>
                        <form>
                            <div class="input-group">
                                <label htmlFor="signup-name">Full Name</label>
                                <input type="text" id="signup-name" required />
                            </div>
                            <div class="input-group">
                                <label htmlFor="signup-email">Email</label>
                                <input type="email" id="signup-email" required />
                            </div>
                            <div class="input-group">
                                <label htmlFor="signup-password">Password</label>
                                <input type="password" id="signup-password" required />
                            </div>
                            <button type="submit" class="login-btn">Signup</button>
                        </form>
                    </div>
                }
                </div>
            </div>
        </div>
    )
}

export default Auth;