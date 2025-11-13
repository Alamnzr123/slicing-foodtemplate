import React from "react";
//import module dari react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import ketiga file views
import Profile from "../Components/Profile";
import Home from "../Components/Home";
import AddRecipe from "../Components/AddRecipe";
import RecipeDetail from "../Components/RecipeDetail";
import Login from "../Components/Login";
import Register from "../Components/Register";
import ForgotPassword from "../Components/ForgotPassword";
import ResetPasswordCode from "../Components/ResetPasswordCode";
import ResetPassword from "../Components/ResetPassword";
import VideoRecipe from "../Components/VideoRecipe";
import ChangeProfile from "../Components/ChangeProfile";
import NotFound from "../Components/NotFound";
import EditRecipe from "../Components/EditRecipe";
import Coba from "../Components/Coba";

const route = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotpass" element={<ForgotPassword />} />
        <Route path="/resetpass" element={<ResetPassword />} />
        <Route path="/videorecipe" element={<VideoRecipe />} />
        <Route path="/resetpasscode" element={<ResetPasswordCode />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/changeprofile" element={<ChangeProfile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/addrecipe" element={<AddRecipe />} />
        <Route path="/editrecipe/:id" element={<EditRecipe />} />
        <Route path="/recipedetail" element={<RecipeDetail />} />
        <Route path="/coba" element={<Coba />} />
        <Route path="/recipe/detail/:id" element={<RecipeDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default route;
