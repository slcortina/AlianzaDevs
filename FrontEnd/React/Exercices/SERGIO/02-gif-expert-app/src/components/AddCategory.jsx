import { useState } from "react";
import { PropTypes } from "prop-types";

export const AddCategory = ({ onNewCategory }) => {
  const [onChangeValue, setOnChangeValue] = useState("");

  const onChangeValueHandler = ({ target }) => {
    setOnChangeValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const newCategory = onChangeValue.trim();
    if (newCategory.trim().length <= 1) return;
    onNewCategory(newCategory);
    setOnChangeValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar Gifs"
        value={onChangeValue}
        onChange={onChangeValueHandler}
      />
    </form>
  );
};
AddCategory.propTypes = {
  onNewCategory: PropTypes.func,
};
