import React, { useContext } from 'react'
import DashboardContext from '../../context/DashboardContext';
import classes from "./Checkbox.module.css";
const SelectAllCheckbox = ({ currData }) => {

    const { setSelectedItems, isSelectAllChecked, setIsSelectAllChecked } = useContext(DashboardContext);
    const handleChange = () => {
        if (isSelectAllChecked) {
            setIsSelectAllChecked(false);
            setSelectedItems([]);
        }
        else {
            setIsSelectAllChecked(true);
            setSelectedItems(currData.map(item => item.id));
        }
    }
    return (
        <form>
            <input className={classes.checkbox} type="checkbox" onChange={handleChange} checked={isSelectAllChecked} />
        </form>
    )
}

export default SelectAllCheckbox;
