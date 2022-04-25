import React from 'react';
//import module dari react-router-dom
import {BrowserRouter, Routes, Route} from 'react-router-dom';
//import ketiga file views
import Profile from '../Components/Profile';
import Home from '../Components/Home';
import AddRecipe from '../Components/AddRecipe';
import RecipeDetail from '../Components/RecipeDetail';
import Login from '../Components/Login';
import Register from '../Components/Register';
import ForgotPassword from '../Components/ForgotPassword';
import ResetPasswordCode from '../Components/ResetPasswordCode';
import ResetPassword from '../Components/ResetPassword';
import VideoRecipe from '../Components/VideoRecipe';
import ChangeProfile from '../Components/ChangeProfile';

const route = () => {
    return(
        <div>
            {/*selalu gunakan yang pertama  BrowserRouter, Routes dan Route */}
            <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={<Home />}>Home</Route>
                    <Route path="/register" element={<Register />}>Register</Route>
                    <Route path="/forgotpass" element={<ForgotPassword />}>Forgot Password</Route>
                    <Route path="/resetpass" element={<ResetPassword />}>Reset Password</Route>
                    <Route path="/videorecipe" element={<VideoRecipe />}>Video Recipe</Route>
                    <Route path="/resetpasscode" element={<ResetPasswordCode />}>Reset Password Code</Route>
                    <Route path="/profile" element={<Profile />}>Profile</Route>
                    <Route path="/changeprofile" element={<ChangeProfile />}>Change Profile</Route>
                    <Route path="/login" element={<Login />}>Login</Route>
                    <Route path="/addrecipe" element={<AddRecipe />}>Add Recipe</Route>
                    <Route path="/recipedetail" element={<RecipeDetail />}>Recipe Detail</Route>
                </Route>
            </Routes>
            </BrowserRouter>
        </div>
    )
}

export default route;