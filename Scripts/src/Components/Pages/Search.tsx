import * as React from "react";
import OutletListContainter from "../Containters/OutletListContainter";
import SearchContainer from "../Containters/SearchContainer";

const SearchPage = () => (
    <div>
        <h2>OutletsNearby</h2>
        <hr />
        <SearchContainer />
        <hr />
        <OutletListContainter />
        <div>Footer</div>
    </div>
)

export default SearchPage