import React, { useContext } from "react";
// import "../styles/SearchBox.css";
import DataContext from "../utils/DataContext";

const Profile = () => {
    const context = useContext(DataContext);

    return (
        <div className="searchbox">
            <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="">
                        DOB
          </span>
                </div>

                <input type="date" className="form-control" onChange={e => context.handleSearchChange(e)} />

                <span className="input-group-text" id="">
                    First
          </span>
                <input type="name" className="form-control" onChange={e => context.handleSearchChange(e)} />
                <span className="input-group-text" id="">
                    Last
          </span>
                <input type="name" className="form-control" onChange={e => context.handleSearchChange(e)} />
            </div>
        </div>
    );
};
export default Profile;