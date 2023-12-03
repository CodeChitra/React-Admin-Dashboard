import React, { useContext } from 'react'
import DashboardContext from '../../context/DashboardContext'
import classes from "./Checkbox.module.css";
const Checkbox = ({ id }) => {
    const { setSelectedItems, selectedItems } = useContext(DashboardContext);
    const handleChange = (e) => {
        if (e.target.checked) {
            setSelectedItems(prev => [...prev, id])
        } else {
            setSelectedItems(prev => [...prev].filter(item => item !== id))
        }
    }
    return (
        <form>
            <input className={classes.checkbox} type="checkbox" onChange={handleChange} checked={selectedItems.find(el => el === id) || false} value={selectedItems} />
        </form>
    )
}

export default Checkbox
