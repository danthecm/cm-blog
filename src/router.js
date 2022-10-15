import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout";
import Home from "./components/pages/Home/Home";
import SingleBlog from "./components/pages/SingleBlog/SingleBlog";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/:slug" element={<SingleBlog />} />
            <Route path="/test" element={<h1>This is a test pages</h1>} />
          </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
