import React, { useEffect, useState } from "react";

const DashboardContext = React.createContext();

const DashboardProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [isSelectAllChecked, setIsSelectAllChecked] = useState(false);
  const [editColumn, setEditColumn] = useState(0);

  const getItem = (id) => {
    return filteredData.find((item) => item.id === id);
  };
  const handleEditItem = (id, editObject) => {
    if (editColumn === id) {
      const temp = filteredData.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            ...editObject,
          };
        } else {
          return item;
        }
      });
      const temp2 = data.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            ...editObject,
          };
        } else {
          return item;
        }
      });

      setFilteredData(temp);
      setData(temp2);
      setEditColumn(0);
    } else {
      setEditColumn(id);
    }
  };

  const handleDeleteItem = (id) => {
    const temp = filteredData.filter((item) => item.id !== id);
    setFilteredData(temp);
    setData(temp);
  };

  const handleDeleteItems = () => {
    let temp = [...filteredData];
    selectedItems.forEach((id) => {
      temp = temp.filter((el) => el.id !== id);
    });
    setFilteredData(temp);
    setData(temp);
    setSelectedItems([]);
    setIsSelectAllChecked(false);
  };

  const handleFilterItems = (searchString) => {
    const lowerStr = searchString.toLowerCase();
    if (searchString.trim() === "") {
      setFilteredData([...data]);
    } else {
      const temp = data.filter((item) => {
        const matchName = item.name.toLowerCase().includes(lowerStr);
        const matchEmail = item.email.toLowerCase().includes(lowerStr);
        const matchRole = item.role.toLowerCase().includes(lowerStr);
        return matchName || matchEmail || matchRole;
      });
      setFilteredData(temp);
    }
  };
  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
      );
      const data = await response.json();
      setData(data);
      setFilteredData(data);
    }
    getData();
  }, []);
  return (
    <DashboardContext.Provider
      value={{
        filteredData,
        handleDeleteItem,
        setSelectedItems,
        handleDeleteItems,
        selectedItems,
        isSelectAllChecked,
        setIsSelectAllChecked,
        handleFilterItems,
        editColumn,
        setEditColumn,
        handleEditItem,
        getItem,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export default DashboardContext;
export { DashboardProvider };
