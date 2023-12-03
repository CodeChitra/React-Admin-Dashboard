import React, { useContext, useState } from "react";
import classes from "./Search.module.css";
import DashboardContext from "../../context/DashboardContext";
const Search = () => {
  const [searchText, setSearchText] = useState("");
  const { handleFilterItems } = useContext(DashboardContext);
  const handleChangeInput = (e) => {
    setSearchText(e.target.value);
  };
  return (
    <form
      className={classes.form__search}
      onSubmit={(e) => {
        e.preventDefault();
        handleFilterItems(searchText);
      }}
    >
      <input
        type="text"
        placeholder="Search for a record..."
        className={classes["form__search--input"]}
        onChange={handleChangeInput}
        value={searchText}
      />
    </form>
  );
};

export default Search;
