import React, { Component } from "react";
import Gambar1 from "../Assets/logo.svg"

const ForgotPassword = () => {
  return (
    <div>
      <div className="row m-0 Auth_upper__6LgZK">
        <div className="col-md-6 Auth_bg__o9fLW">
          <div className="mask_bg"></div>
          <div className="background_login_logo">
        <img src={Gambar1} />
      </div>
        </div>
        <div className="col-md-6 px-0">
          <nav className="navbar NavAuth_wrapper__PcJEB">
            <div className="container undefined"></div>
          </nav>
          <div className="container SignIn_container__k8cC9">
            <form className="SignIn_form__ZAIHo">
              <span>Forgot Password?</span>
              <br />
              <p>
                We just need your registered e-mail address
                <br />
                <p> to send your password resend</p>
              </p>
              <div className="fp">
                <div className="InputAuth_box__SHTUc">
                  <label className="form-label" for="email">
                    Email
                  </label>
                  <input
                    className="form-control"
                    placeholder="examplexxx@gmail.com"
                    type="email"
                    name="email"
                    id="email"
                    required=""
                  />
                </div>
                <button
                  className="btn SignIn_btn_gold__YVLeP"
                  type="submit"
                >
                  Send Mail
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
