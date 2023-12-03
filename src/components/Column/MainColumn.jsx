import React, { useContext } from "react";
import classes from "./MainColumn.module.css";
import DashboardContext from "../../context/DashboardContext";
import EditColumn from "./EditColumn";
const MainColumn = ({ children, name, id, editObject, setEditObject }) => {
  const { editColumn } = useContext(DashboardContext);
  const isEdit = editColumn === id && name !== "checkbox" && name !== "actions";
  //   return <div className={classes["dashboard__column--main"]}>{children}</div>;
  return (
    <>
      {isEdit && (
        <EditColumn
          name={name}
          id={id}
          editObject={editObject}
          setEditObject={setEditObject}
        />
      )}
      {isEdit || (
        <div className={classes["dashboard__column--main"]}>{children}</div>
      )}
    </>
  );
};

export default MainColumn;
