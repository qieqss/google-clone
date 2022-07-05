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
  const [{ term }, dispatch] = useStateValue();
  const { data } = useGoogleSearch(term);

  console.log(data);
  return (
    <section id="search">
      <div className="search__header">
        <Link to="/" className="logo--anchor">
          <img src={Logo} id="logo" alt="" />
        </Link>
        <div className="search__header--body">
          <SearchBar hideButtons search />
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
      {term && (
        <div className="search__results">
          <p className="search__result--count">
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime} seconds) for{" "}
            {<strong>"{term}"</strong>}
          </p>

          {data?.items.map((item) => (
            <div className="search__result">
              <a className="search__result--anchor" href={item.link}>
                {item.pagemap?.cse_image?.length > 0 &&
                  item.pagemap?.cse_image[0]?.src && (
                    <img
                      className="search__result--img"
                      src={
                        item.pagemap?.cse_image?.length > 0 &&
                        item.pagemap?.cse_image[0]?.src
                      }
                      alt=""
                    />
                  )}
                {item.displayLink}
              </a>
              <a href={item.link} className="search__result--title">
                <h2>{item.title}</h2>
              </a>

              <p className="search__result--snippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Search;
