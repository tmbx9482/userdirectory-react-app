import React, { useContext } from "react";
import DataContext from "../utils/DataContext";
// allows to serach for user by name, DOB or email
const SearchName = () => {
  const context = useContext(DataContext);

  return (
    <div className="searchbox">
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text" id="">
            Search
            </span>
        </div>
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="name"
          aria-label="Search"
          onChange={e => context.handleSearchFlip(e)}
        />
      </div>
    </div>
  );
}
export default SearchName;