import React from 'react'
import classes from "./HeadColumn.module.css";
const HeadColumn = ({ children }) => {
    return (
        <div className={classes["dashboard__column--header"]}>
            {children}
        </div>
    )
}

export default HeadColumn
