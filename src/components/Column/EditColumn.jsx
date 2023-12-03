import classes from "./EditColumn.module.css";
const EditColumn = ({ name, id, editObject, setEditObject }) => {
  const handleInputChange = (e) => {
    setEditObject((prev) => {
      return {
        ...prev,
        [name]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEditObject;
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name={name}
        className={classes["edit-column"]}
        placeholder={`Enter new ${name}`}
        onChange={handleInputChange}
        value={editObject[name]}
      />
    </form>
  );
};

export default EditColumn;
