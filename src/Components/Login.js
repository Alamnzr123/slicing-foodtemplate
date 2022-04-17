import "../App.css";
import react from "react"
import {Link} from 'react-router-dom';

const Login = () => {
  return (
 
  <div className="row m-0 Auth_upper__6LgZK">
    <div className="col-md-6 Auth_bg__o9fLW">
      <div className="mask_bg"></div>
    </div>
    <div className="col-md-6 px-0">
        <nav className="navbar NavAuth_wrapper__PcJEB">
            <div className="container undefined"></div>
        </nav>
        <div className="container SignIn_container__k8cC9">
            <form className="SignIn_form__ZAIHo"><span>Welcome</span><br/><p >Log in into your existing account.</p>
                <div>
                    <div className="InputAuth_box__SHTUc"><label className="form-label" for="email">E-mail</label><input className="form-control" placeholder="Enter your email address" type="email" name="email" id="email" required=""/></div>
                    <div className="InputAuth_box__SHTUc"><label className="form-label" for="password">Password</label><input className="form-control" placeholder="Enter your password" type="password" name="password" id="password" required=""/></div>
                    <div className="InputAuth_box__SHTUc"><input type="checkbox" id="vehicle1" name="login" value="login"/><label for="vehicle1"> I Aggree to term & Conditions</label><br/></div>

                    <button className="btn SignIn_btn_gold__YVLeP disabled" type="submit">Login</button>
                    <p style={{ textAlign: 'right' }}>Forgot Password ?</p>
                    <p style={{textAlign: 'center'}}>Don't have an account? Sign Up</p></div>
            </form>
        </div>
    </div>
</div>

  );
};

export default Login;
