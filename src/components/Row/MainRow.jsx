import React, { useContext, useEffect, useState } from "react";
import classes from "./Row.module.css";
import MainColumn from "../Column/MainColumn";
import Checkbox from "../Checkbox/Checkbox";
import Actions from "../Actions/Actions";
import DashboardContext from "../../context/DashboardContext";
const MainRow = ({ item }) => {
  const { id, name, email, role } = item;
  const { selectedItems, getItem } = useContext(DashboardContext);
  //   const { handleSaveItem, getItem } = useContext(DashboardContext);
  const [editObject, setEditObject] = useState({
    name: "",
    email: "",
    role: "",
  });
  const isSelected = selectedItems.find((el) => el === id) || false;
  useEffect(() => {
    const { name, email, role } = getItem(id);
    setEditObject({
      name,
      email,
      role,
    });
  }, []);
  return (
    <div
      className={`${classes.row} ${
        isSelected ? classes["row--selected"] : null
      }`}
    >
      <MainColumn name="checkbox" id={id}>
        <Checkbox id={id} />
      </MainColumn>
      <MainColumn
        name="name"
        id={id}
        editObject={editObject}
        setEditObject={setEditObject}
      >
        {name}
      </MainColumn>
      <MainColumn
        name="email"
        id={id}
        editObject={editObject}
        setEditObject={setEditObject}
      >
        {email}
      </MainColumn>
      <MainColumn
        name="role"
        id={id}
        editObject={editObject}
        setEditObject={setEditObject}
      >
        {role}
      </MainColumn>
      <MainColumn name="actions" id={id}>
        <Actions id={id} editObject={editObject} />
      </MainColumn>
    </div>
  );
};

export default MainRow;
