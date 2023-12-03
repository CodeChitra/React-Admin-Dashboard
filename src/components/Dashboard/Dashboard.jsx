import React, { useContext, useState } from 'react'
import classes from "./Dashboard.module.css";
import HeadRow from '../Row/HeadRow';
import MainRow from '../Row/MainRow';
import Pagination from '../Pagination/Pagination';
import DashboardContext from '../../context/DashboardContext';
const Dashboard = () => {
    const { filteredData } = useContext(DashboardContext);
    const [currPage, setCurrPage] = useState(1);
    const startIndex = (currPage - 1) * 10;
    const lastIndex = startIndex + 10;
    const currData = filteredData.slice(startIndex, lastIndex);

    const handleNext = (totalPages) => {
        if (currPage < totalPages) {
            setCurrPage(prev => prev + 1);
        }
    }
    const handlePrev = () => {
        if (currPage > 1) {
            setCurrPage(prev => prev - 1);
        }
    }

    const handleFirst = () => {
        setCurrPage(1);
    }

    const handleLast = (lastPage) => {
        setCurrPage(lastPage)
    }
    return (
        <div className={classes.dashboard}>
            <HeadRow currData={currData} />
            {currData.map((item => <MainRow key={item.id} item={item} />))}
            <Pagination
                totalData={filteredData.length}
                dataPerPage={10}
                handleFirst={handleFirst}
                handleLast={handleLast}
                handleNext={handleNext}
                handlePrev={handlePrev}
                setCurrPage={setCurrPage}
                currPage={currPage}
            />
        </div>
    )
}

export default Dashboard
