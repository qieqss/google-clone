import React from 'react';
import { useStateValue } from '../StateProvider';
import useGoogleSearch from '../useGoogleSearch';

const Search = () => {
    const [{ term }, dispatch] = useStateValue()
    const { data } = useGoogleSearch(term)


    return (
        <section id="search">
            <div className="search__header">
                <h1>{term}</h1>
            </div>
            <div className="search__results">

            </div>
        </section>
    );
}

export default Search;
