import React from "react";

const Copy = ({ appBrandName }) => {

    const date = new Date();
    const year = date.getFullYear();

    return <span 
        className="opacity-75"
        >
        &copy; { year } paulowells.com - { appBrandName }
    </span> 
};

export default Copy;