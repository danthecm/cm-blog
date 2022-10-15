import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../common/Navbar";
import Footer from "../common/Footer";

const MainLayout = props => {
    return(
        <>
            <NavBar />

            <Outlet />

            <Footer />
        </>
    )
}

export default MainLayout