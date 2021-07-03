import React from "react";
import { connect } from "react-redux";
import { setQuantity } from "../store";

const GroceryItem = ({ onClick, bought, text, id }) => {
  const handleChange = (event) => {
    setQuantity(id, event.target.value);
  };

  return (
    <div>
      <li
        onClick={onClick}
        style={{
          textDecoration: bought ? "line-through" : "none",
        }}
      >
        {text}
      </li>
      <select onChange={handleChange}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  quantity: (id, value) => dispatch(setQuantity(id, value)),
});

export default connect(null, mapDispatchToProps)(GroceryItem);
