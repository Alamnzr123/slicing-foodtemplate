import React, { Component } from "react";
import Gambar1 from "../Assets/logo.svg";
import { Link } from "react-router-dom";
const ResetPassword = () => {
  return (
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
            <div>
              <div className="InputAuth_box__SHTUc">
                <label className="form-label" for="email">
                  Create New Password
                </label>
                <input
                  className="form-control"
                  placeholder="Enter your new password"
                  type="password"
                  name="newpassword"
                  id="newpassword"
                  required=""
                />
              </div>
              <div className="InputAuth_box__SHTUc">
                <label className="form-label" for="password">
                  New Password
                </label>
                <input
                  className="form-control"
                  placeholder="Enter your password"
                  type="password"
                  name="password"
                  id="password"
                  required=""
                />
              </div>
              <div className="InputAuth_box__SHTUc_checkbox">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="checkbox"
                  name="checkbox"
                  value="checkbox"
                />
                <label for="checkbox"> I Aggree to term & Conditions</label>
              </div>

              <Link to="/">
                <button className="btn SignIn_btn_gold__YVLeP" type="submit">
                  Reset Password
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
