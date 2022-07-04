import React, { useState } from "react";
import Logo from "../assets/logo.svg";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../StateProvider"
import { actionTypes } from "../reducer";

const Landing = () => {
  const [{}, dispatch] = useStateValue();

  const [input, setInput] = useState("")
  const navigate = useNavigate()

  const search = e => {
    e.preventDefault()

    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input
    })

    navigate('/search')
  }

  return (
    <section id="landing">

      <figure className="logo--wrapper">
        <img src={Logo} id="logo" alt="" />
      </figure>

      <form action="/search" className="input--wrapper">
        <SearchIcon className="input__icon" />
        <input defaultValue={input} onSubmit={e => setInput(e.target.value)}/>
        <MicIcon />
      </form>

      <div className="search__buttons">
        <Button type="submit" onClick={search}>Google Search</Button>
        <Button>I'm Feeling Lucky</Button>
      </div>

    </section>
  );
};

export default Landing;
