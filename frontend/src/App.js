import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  LoginPage,
  SignupPage,
  HomePage,
  ProductsPage,
  BestSelling,
  EventPage,
  FaqPage,
  ProductDetailsPage,
  ProfilePage,
} from "./Routes.js";
import { useDispatch } from "react-redux";
import { loadUser } from "./redux/actions/user";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./axiosConfig/axiosConfig";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser()); // Dispatch the action to load user data
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignupPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/product/:name" element={<ProductDetailsPage />} />
        <Route path="/profile" element={<ProfilePage />} />

        <Route path="/best-selling" element={<BestSelling />} />
        <Route path="/event-page" element={<EventPage />} />
        <Route path="/events" element={<EventPage />} />
        <Route path="/faq" element={<FaqPage />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
};

export default App;
