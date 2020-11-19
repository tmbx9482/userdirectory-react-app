import React from "react";
import SearchLife from "./SearchLife.js";

// inline styleing for navbar
function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                aria-expanded="true"
                aria-label="Toggle navigation"
            >

            </button>
            <div className="collapse navbar-collapse row">
                <div className="search-area col-8">
                    <SearchLife />
                </div>
            </div>
        </nav>
    );
}
export default NavBar;