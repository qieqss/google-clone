import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import { Button } from "@mui/material";
import { useStateValue } from "../StateProvider";
import { useNavigate } from "react-router-dom";
import { actionTypes } from "../reducer";

const SearchBar = ({ hideButtons }) => {
  const [{}, dispatch] = useStateValue();

  const [term, setTerm] = useState("");
  const navigate = useNavigate();

  const search = (e) => {
    e.preventDefault();

    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: term,
    });

    // route to search page without refreshing
    navigate("/search");
  };

  return (
    <form className="search">
      <div className="input--wrapper">
        <SearchIcon className="input__icon" />
        <input value={term} onChange={(e) => setTerm(e.target.value)} />
        <MicIcon />
      </div>
      {!hideButtons && (
        <div className="search__buttons">
          <Button type="submit" onClick={search}>
            Google Search
          </Button>
          <Button>I'm Feeling Lucky</Button>
        </div>
      )}
    </form>
  );
};

export default SearchBar;
