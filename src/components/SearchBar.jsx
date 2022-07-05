import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import { Button } from "@mui/material";
import { useStateValue } from "../StateProvider";
import { useNavigate } from "react-router-dom";
import { actionTypes } from "../reducer";

const SearchBar = ({ hideButtons }) => {
  const [{}, dispatch] = useStateValue();

  const [input, setInput] = useState("");

  const navigate = useNavigate();

  const search = (event) => {
    event.preventDefault();

    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });

    navigate("/search");
  };

  return (
    <>
      <form method="get" role="search" className="input--wrapper">
        <SearchIcon className="input__icon" />
        <input
          autoComplete="on"
          name="q"
          defaultValue={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <MicIcon />
      </form>
      {!hideButtons && (
        <div className="search__buttons">
          <Button type="submit" onClick={search}>
            Google Search
          </Button>
          <Button>I'm Feeling Lucky</Button>
        </div>
      )}
    </>
  );
};

export default SearchBar;
