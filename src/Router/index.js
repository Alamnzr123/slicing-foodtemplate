import React from 'react';
//import module dari react-router-dom
import {BrowserRouter, Routes, Route} from 'react-router-dom';
//import ketiga file views
import SaveRecipe from '../Components/SaveRecipe';
import LikeRecipe from '../Components/LikeRecipe';
import Profile from '../Components/Profiles';
import Home from '../Components/Home';
import AddRecipe from '../Components/AddRecipe';
import RecipeDetail from '../Components/RecipeDetail';
import Login from '../Components/Login';
import Register from '../Components/Register';
import ForgotPassword from '../Components/ForgotPassword';
import ResetPassword from '../Components/ResetPassword';

const route = () => {
    return(
        <div>
            {/*selalu gunakan yang pertama  BrowserRouter, Routes dan Route */}
            <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={<Login />}>Login</Route>
                    <Route path="/register" element={<Register />}>Register</Route>
                    <Route path="/forgotpass" element={<ForgotPassword />}>Forgot Password</Route>
                    <Route path="/resetpass" element={<ResetPassword />}>Reset Password</Route>
                </Route>
                <Route path="/landing/">
                    <Route index element={<Home />}>Home</Route>
                    <Route path="/addrecipe" element={<AddRecipe />}>AddRecipe</Route>
                    <Route path="/profile" element={<Profile />}>Profile</Route>
                </Route>
            </Routes>
            </BrowserRouter>
        </div>
    )
}

export default route;