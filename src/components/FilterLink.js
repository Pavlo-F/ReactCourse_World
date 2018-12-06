import React from "react";
import { Link } from "react-router-dom";
import "./linkStyle.css";

const FilterLink = ({ filter, children }) => (
    <Link
        to={filter === "all" ? "" : filter}
        activestyle={{
            textDecoration: "none",
            color: "black",
        }}
    >
        {children}
    </Link>
);

export default FilterLink;
