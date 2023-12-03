import React, { useContext, useEffect, useState } from "react";
import classes from "./App.module.css";
import Search from "./components/Search/Search";
import Button from "./components/Button/Button";
import Dashboard from "./components/Dashboard/Dashboard";
import { MdDelete } from "react-icons/md";
import DashboardContext from "./context/DashboardContext";
const App = () => {
  const { handleDeleteItems, selectedItems, filteredData } =
    useContext(DashboardContext);
  return (
    <div className={classes.app}>
      <div className={classes["main__container"]}>
        <div className={classes["main__container--header"]}>
          <Search />
          <h1>Admin Dashboard</h1>
          <Button
            handleClick={handleDeleteItems}
            text="Delete Selected"
            icon={<MdDelete size={20} />}
          />
        </div>
        <div className={classes["main__container--dashboard"]}>
          <Dashboard />
        </div>
        <div className={classes["main__container--footer"]}>
          <span>
            {selectedItems.length} of {filteredData.length} rows are selected
          </span>
        </div>
      </div>
    </div>
  );
};

export default App;
