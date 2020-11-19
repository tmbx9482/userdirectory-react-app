import React, { useState, useEffect } from "react";
import DataTable from "./PeopleTable";
import Nav from "./NavBar";
import API from "../utils/API";
import DataContext from "../utils/DataContext";
// eslint-disable-next-line
// the size, weight, font of img for profiles
const AreaData = () => {
    const [developerState, setDeveloperState] = useState({
        users: [],
        order: "ascend",
        filteredUsers: [],
        headings: [
            { name: "Image", width: "5%", order: "descend" },
            { name: "name", width: "15%", order: "descend" },
            { name: "phone", width: "10%", order: "descend" },
            { name: "email", width: "10%", order: "descend" },
            { name: "dob", width: "20%", order: "descend" }
        ]
    });

    const handleSort = heading => {
        let currentOrder = developerState.headings
            .filter(elem => elem.name === heading)
            .map(elem => elem.order)
            .toString();

        if (currentOrder === "descend") {
            currentOrder = "ascend";
        } else {
            currentOrder = "descend";
        }

        const orderProfile = (a, b) => {
            if (currentOrder === "ascend") {
                // account for missing values
                if (a[heading] === undefined) {
                    return 1;
                } else if (b[heading] === undefined) {
                    return -1;
                }
                // numerically
                else if (heading === "name") {
                    return a[heading].first.localeCompare(b[heading].first);
                } else if (heading === "dob") {
                    return a[heading].age - b[heading].age;
                } else {
                    return a[heading].localeCompare(b[heading]);
                }
            } else {
                // account for missing values
                if (a[heading] === undefined) {
                    return 1;
                } else if (b[heading] === undefined) {
                    return -1;
                }
                // numerically
                else if (heading === "name") {
                    return b[heading].first.localeCompare(a[heading].first);
                } else if (heading === "dob") {
                    return b[heading].age - a[heading].age;
                } else {
                    return b[heading].localeCompare(a[heading]);
                }
            }
        };
        const sortedUsers = developerState.filteredUsers.sort(orderProfile);
        const updatedHeadings = developerState.headings.map(elem => {
            elem.order = elem.name === heading ? currentOrder : elem.order;
            return elem;
        });

        setDeveloperState({
            ...developerState,
            filteredUsers: sortedUsers,
            headings: updatedHeadings
        });
    };

    const handleSearchFlip = event => {
        const filter = event.target.value;
        const filteredList = developerState.users.filter(item => {
            let values = item.name.first.toLowerCase() + " " + item.name.last.toLowerCase();
            console.log(filter, values)
            if (values.indexOf(filter.toLowerCase()) !== -1) {
                return item
            };
        });

        setDeveloperState({ ...developerState, filteredUsers: filteredList });
    };

    // Source of information https://reactjs.org/docs/hooks-effect.html
    // ffect Hook lets you perform side effects in function components
    useEffect(() => {
        API.getUsers().then(results => {
            console.log(results.data.results);
            setDeveloperState({
                ...developerState,
                users: results.data.results,
                filteredUsers: results.data.results
            });
        });
    }, []);

    return (
        <DataContext.Provider
            value={{ developerState, handleSearchFlip, handleSort }}
        >
            <Nav />
            <div className="data-area">
                {developerState.filteredUsers.length > 0 ? <DataTable /> : <div></div>}
            </div>
        </DataContext.Provider>
    );
};

export default AreaData;