import React, { useContext } from "react";
import classes from "./Actions.module.css";
import Button from "../Button/Button";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import DashboardContext from "../../context/DashboardContext";
const Actions = ({ id, editObject }) => {
  const { handleDeleteItem, handleEditItem } = useContext(DashboardContext);
  return (
    <div className={classes.actions}>
      <Button
        id={id}
        handleClick={handleEditItem}
        icon={<FaEdit size={20} />}
        editObject={editObject}
      />
      <Button
        id={id}
        handleClick={handleDeleteItem}
        icon={<MdDelete size={20} />}
      />
    </div>
  );
};

export default Actions;
