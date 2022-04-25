import "../App.css";
import react from "react"
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Gambar1 from "../Assets/logo.svg"

const Login = () => {
    const navigate = useNavigate()
    const [form, setForm] = useState(
        {
            email: "",
            password: "",
            terms: ""
        }
    )
    const onChangeInput = (e, field) => {
        setForm(
            {
                ...form,
                [field]: e
            }
        )
    }
    const onSubmit = (e) => {
        e.preventDefault()
        if(form.terms !== true){
            alert("You must agree terms & conditions")
        } else if(form.email == "" || form.password == "") {
            alert("Email / Password must be filled !")
        } else {
            const body = {
                email: form.email,
                password: form.password
            }
            axios.post('http://localhost:3001/login', body)
            .then((response) => {
                if(response.data.status !== "success") {
                    alert(response.data.status+": "+response.data.message)
                } else {
                    alert(response.data.message)
                    localStorage.setItem("token", response.data.token)
                    localStorage.setItem("user_id", response.data.data)
                    return navigate("/")
                }
            })
            .catch((err) => {
                alert(err)
            })
        }
    }


  return (
 
  <div className="row m-0 Auth_upper__6LgZK">
    <div className="col-md-6 Auth_bg__o9fLW ">
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
            <form className="SignIn_form__ZAIHo" onSubmit={(e) => onSubmit(e)}><span>Welcome</span><br/><p >Log in into your existing account.</p>
                <div>
                    <div className="InputAuth_box__SHTUc"><label className="form-label" for="email">E-mail</label><input className="form-control" onChange={(e) => onChangeInput(e.target.value, "email")} placeholder="Enter your email address" type="email" name="email" id="email" required=""/></div>
                    <div className="InputAuth_box__SHTUc"><label className="form-label" for="password">Password</label><input className="form-control" onChange={(e) => onChangeInput(e.target.value, "password")} placeholder="Enter your password" type="password" name="password" id="password" required=""/></div>
                    <div className="InputAuth_box__SHTUc_checkbox"><input type="checkbox" id="terms" name="terms" onChange={(e) => onChangeInput(e.target.checked, "terms")}/><label for="terms"> I Aggree to term & Conditions</label></div>

                    <button className="btn SignIn_btn_gold__YVLeP" type="submit">Login</button>
                    <Link to='/forgotpass'><p style={{ textAlign: 'right' }}>Forgot Password ?</p></Link>
                    <Link to='/register'><p style={{textAlign: 'center'}}>Don't have an account? Sign Up</p></Link></div>
            </form>
        </div>
    </div>
</div>

  );
};

export default Login;