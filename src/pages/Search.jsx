import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import DescriptionIcon from "@mui/icons-material/Description";
import ImageIcon from "@mui/icons-material/Image";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import RoomIcon from "@mui/icons-material/Room";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Logo from "../assets/logo.svg";
import SearchBar from "../components/SearchBar";
import { useStateValue } from "../StateProvider";
import useGoogleSearch from "../useGoogleSearch";

const Search = () => {
  
  return (
    <section id="search">
      <div className="search__header">
        <Link to="/" className="logo--anchor">
          <img src={Logo} id="logo" alt="" />
        </Link>
        <div className="search__header--body">
          <SearchBar hideButtons />
          <div className="search__options">
            <div className="search__options--left">
              <div className="search__option">
                <SearchIcon />
                <Link to="/search">All</Link>
              </div>
              <div className="search__option">
                <DescriptionIcon />
                <Link to="/search">News</Link>
              </div>
              <div className="search__option">
                <ImageIcon />
                <Link to="/search">Images</Link>
              </div>
              <div className="search__option">
                <LocalOfferIcon />
                <Link to="/search">Shopping</Link>
              </div>
              <div className="search__option">
                <RoomIcon />
                <Link to="/search">Maps</Link>
              </div>
              <div className="search__option">
                <MoreVertIcon />
                <Link to="/search">More</Link>
              </div>
            </div>
            <div className="search__options--right">
              <div className="search__option">
                <Link to="/search">Settings</Link>
              </div>
              <div className="search__option">
                <Link to="/search">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="gcse-searchresults-only">

      </div>
      <script async src="https://cse.google.com/cse.js?cx=1ab32598bf556d77c"></script>
    </section>
  );
};

export default Search;
