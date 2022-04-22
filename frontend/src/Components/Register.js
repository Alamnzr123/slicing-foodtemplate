import React, { useState } from 'react';
import Gambar1 from "../Assets/logo.svg"
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

const Register = () => {
    const navigate = useNavigate();
    const [formRegister, setFormRegister] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        newPassword: ''
    });

    const onChangeinput = (e, field) => {
        setFormRegister({
            ...formRegister,
            [field]: e.target.value
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();

        const formSubmit = new FormData();
        const {name, email, phone, password, newPassword} = formRegister;

        formSubmit.append("name", name);
        formSubmit.append("email", email);
        formSubmit.append("phone", phone);
        formSubmit.append("password", password);
        formSubmit.append("newPassword", newPassword)

        axios
        .post(`${process.env.REACT_APP_BACKEND_URL}/register`, formSubmit, {
            headers : {
                "Content-Type": "multipart/form-data"
            },
        }).then((res) => {
            swal({
                title: 'Success!',
                text: res.data.message,
                icon: 'success',
            }).then(() => {
                navigate('/')
            });
        }).catch((err) => {
            const error = err.response.data.errors;
            console.log(error)
        });
    };


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
                    <form method="post" encType='multipart/form-data' onSubmit={(e) => onSubmit(e)} className="SignIn_form__ZAIHo"><span>Let's Get Started !</span><br/><p >Create new account to access all features</p>
                        <div>
                        <div className="InputAuth_box__SHTUc"><label className="form-label" for="name">Name</label><input className="form-control" placeholder="Name" type="text" name="name" id="name" onChange={(e) => onChangeinput(e, 'name')} required=""/></div>
                            <div className="InputAuth_box__SHTUc"><label className="form-label" for="email">E-mail Address*</label><input className="form-control" placeholder="Enter your email address" type="email" onChange={(e) => onChangeinput(e, 'email')} name="email" id="email" required=""/></div>
                            <div className="InputAuth_box__SHTUc"><label className="form-label" for="phone">Phone Number</label><input className="form-control" placeholder="08xxxxxxxx" type="number" name="phone" id="phone" onChange={(e) => onChangeinput(e, 'phone')} required=""/></div>
                            <div className="InputAuth_box__SHTUc"><label className="form-label" for="password">Create New Password</label><input className="form-control" placeholder="Create your password" type="password" onChange={(e) => onChangeinput(e, 'password')} name="password" id="password" required=""/></div>
                            <div className="InputAuth_box__SHTUc"><label className="form-label" for="newPassword">New Password</label><input className="form-control" placeholder="New password" type="password" name="newPassword" onChange={(e) => onChangeinput(e, 'newPassword')} id="newPassword" required=""/></div>
                            <div className="InputAuth_box__SHTUc_checkbox"><input type="checkbox" id="checkbox" name="login" value="checkbox"/><label for="checkbox"> I Aggree to term & Conditions</label><br/></div>
        
                           <Link to='/home'><button className="btn SignIn_btn_gold__YVLeP" type="submit">Register Account</button></Link>
                            <Link to='/'><p style={{textAlign: 'center'}}>Already have an account? Log in Here.</p></Link></div>
                    </form>
                </div>
            </div>
        </div>
        );
}
export default Register;