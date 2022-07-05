import React, { useState } from "react";
import Logo from "../assets/logo.svg";
import SearchBar from "./SearchBar";

const Landing = () => {
  return (
    <section id="landing">
      <figure className="logo--wrapper">
        <img src={Logo} id="logo" alt="" />
      </figure>

      <SearchBar />
    </section>
  );
};

export default Landing;
