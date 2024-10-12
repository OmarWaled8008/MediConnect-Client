import React from "react";
import Navbar from "./navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./footer/Footer";
import ChatBox from "./chatbox/ChatBox";

export default function LayOut() {
  return (
    <>
      <Navbar />
      <Outlet />
      <ChatBox />
      <Footer />
    </>
  );
}
