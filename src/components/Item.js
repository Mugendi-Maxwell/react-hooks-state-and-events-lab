import React from "react";
import { useState } from "react";

function Item({ name, category }) {
  const [onCart, setOnCart] = useState(false);

  const itemClass = onCart ? "onCart" : "notOnCart";

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={() => setOnCart(!onCart)}>
        {onCart ? "Remove from Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
