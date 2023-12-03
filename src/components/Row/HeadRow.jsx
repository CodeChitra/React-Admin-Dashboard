import React from 'react'
import classes from "./Row.module.css";
import HeadColumn from '../Column/HeadColumn';
import SelectAllCheckbox from '../Checkbox/SelectAllCheckbox';
const HeadRow = ({ currData }) => {
    return (
        <div className={classes.row}>
            <HeadColumn>
                <SelectAllCheckbox currData={currData} />
            </HeadColumn>
            <HeadColumn>
                Name
            </HeadColumn>
            <HeadColumn>
                Email
            </HeadColumn>
            <HeadColumn>
                Role
            </HeadColumn>
            <HeadColumn>
                Actions
            </HeadColumn>
        </div>
    )
}

export default HeadRow
