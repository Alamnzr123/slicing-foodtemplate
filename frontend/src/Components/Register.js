import React, { useState } from 'react';
import Gambar1 from "../Assets/logo.svg"
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';

const Register = () => {
    const navigate = useNavigate();
    // const [photo, setPhoto] = useState('');
    const [formRegister, setFormRegister] = useState({
        name: "",
        email: "",
        password1: "",
        password2: "",
        phone: "",
        photo: "",
        terms: "",
    });

    const onChangeinput = (e, field) => {
        setFormRegister({
            ...formRegister,
            [field]: e.target.value
        });
    };

    // const onChangePhoto = (e) => {
    //     setPhoto(e.target.files[0])
    //   }

    const onSubmit = (e) => {
        e.preventDefault()
        if(formRegister.terms !== true){
            alert("You must agree terms & conditions")
        } else if(formRegister.name == "" || formRegister.phone == "" || formRegister.email == "" || formRegister.password == "") {
            alert("All field must be filled !")
        } else if (formRegister.password1 !== formRegister.password2) {
            alert("Password not match !, check your input again")
        } else {
            const body = {
                name: formRegister.name,
                email: formRegister.email,
                password: formRegister.password1,
                phone: formRegister.phone
            }
            axios.post('http://localhost:3001/register', body)
            .then((response) => {
                if(response.data.status !== "success") {
                    alert(response.data.status+": "+response.data.message)
                } else {
                    alert(response.data.message)
                    return navigate("/login")
                }
            })
            .catch((err) => {
                alert(err)
            })
        }
    }

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
                            {/* <div className="InputAuth_box__SHTUc"><label className="form-label" for="photo">Photo</label><input className="form-control" placeholder="Photo" type="file" name="photo" onChange={onChangePhoto} id="photo" required=""/></div> */}
                            
                            <div className="InputAuth_box__SHTUc_checkbox"><input type="checkbox" id="checkbox" name="login" value="checkbox"/><label for="checkbox"> I Aggree to term & Conditions</label><br/></div>
        
                           <button className="btn SignIn_btn_gold__YVLeP" type="submit">Register Account</button>
                           <Link to='/login'><p style={{textAlign: 'center'}}>Already have an account? Log in Here.</p></Link></div>
                    </form>
                </div>
            </div>
        </div>
        );
}
export default Register;