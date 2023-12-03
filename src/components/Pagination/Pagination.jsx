import React from "react";
import classes from "./Pagination.module.css";
import { FaStepBackward } from "react-icons/fa";
import { FaStepForward } from "react-icons/fa";
import { FaBackward } from "react-icons/fa6";
import { FaForward } from "react-icons/fa6";

const Pagination = ({
    totalData,
    dataPerPage,
    handleNext,
    handlePrev,
    handleFirst,
    handleLast,
    currPage,
    setCurrPage,
}) => {
    const pages = [];
    for (let i = 1; i <= Math.ceil(totalData / dataPerPage); i++) {
        pages.push(i);
    }

    const isPrevValid = currPage <= 1 ? true : null;
    const isNextValid = currPage >= pages.length ? true : null;
    return (
        <div className={classes.pagination__container}>
            <button
                className={classes.btn}
                onClick={handleFirst}
                disabled={isPrevValid}
            >
                <FaBackward size={20} />
            </button>
            <button
                className={classes.btn}
                disabled={isPrevValid}
                onClick={handlePrev}
            >
                <FaStepBackward size={20} />
            </button>
            <div className={classes.pagination}>
                {pages.map((page, index) => {
                    return (
                        <button
                            key={index}
                            style={{
                                padding: "10px",
                                cursor: "pointer",
                                backgroundColor: currPage === page && "grey",
                            }}
                            onClick={() => setCurrPage(page)}
                        >
                            {page}
                        </button>
                    );
                })}
            </div>
            <button
                className={classes.btn}
                disabled={isNextValid}
                onClick={() => handleNext(pages.length)}
            >
                <FaStepForward size={20} />
            </button>
            <button
                className={classes.btn}
                onClick={() => handleLast(pages.length)}
                disabled={isNextValid}
            >
                <FaForward size={20} />
            </button>
        </div>
    );
};
export default Pagination;
