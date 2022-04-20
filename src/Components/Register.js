import React, { Component } from 'react';
import Gambar1 from "../Assets/logo.svg"

const Register = () => {
        return (
            <div className="row m-0 Auth_upper__6LgZK">
            <div className="col-md-6 Auth_bg__o9fLW_Register">
              <div className="mask_bg_register"></div>
              <div className="background_register_logo">
                <img  src={Gambar1}/>
            </div>
            </div>
            <div className="col-md-6 px-0">
                <nav className="navbar NavAuth_wrapper__PcJEB">
                    <div className="container undefined"></div>
                </nav>
                <div className="container SignIn_container__k8cC9">
                    <form className="SignIn_form__ZAIHo"><span>Let's Get Started !</span><br/><p >Create new account to access all features</p>
                        <div>
                        <div className="InputAuth_box__SHTUc"><label className="form-label" for="email">Name</label><input className="form-control" placeholder="Name" type="text" name="name" id="name" required=""/></div>
                            <div className="InputAuth_box__SHTUc"><label className="form-label" for="email">E-mail Address*</label><input className="form-control" placeholder="Enter your email address" type="email" name="email" id="email" required=""/></div>
                            <div className="InputAuth_box__SHTUc"><label className="form-label" for="password">Phone Number</label><input className="form-control" placeholder="08xxxxxxxx" type="number" name="phone" id="phone" required=""/></div>
                            <div className="InputAuth_box__SHTUc"><label className="form-label" for="password">Create New Password</label><input className="form-control" placeholder="Create your password" type="password" name="password" id="password" required=""/></div>
                            <div className="InputAuth_box__SHTUc"><label className="form-label" for="password">New Password</label><input className="form-control" placeholder="New password" type="password" name="password" id="password" required=""/></div>
                            <div className="InputAuth_box__SHTUc_checkbox"><input type="checkbox" id="checkbox" name="login" value="checkbox"/><label for="checkbox"> I Aggree to term & Conditions</label><br/></div>
        
                            <button className="btn SignIn_btn_gold__YVLeP" type="submit">Register Account</button>
                            <p style={{textAlign: 'center'}}>Already have an account? Log in Here.</p></div>
                    </form>
                </div>
            </div>
        </div>
        );
}

export default Register;