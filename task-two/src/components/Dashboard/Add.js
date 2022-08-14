import React, { useState } from "react";
import Swal from "sweetalert2";

const Add = ({ fooditems, setFooditems, setIsAdding }) => {
  const [foodName, setFoodName] = useState("");
  const [price, setPrice] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();

    if (!foodName || !price) {
      return Swal.fire({
        icon: "error",
        title: "Error!",
        text: "All fields are required.",
        showConfirmButton: true,
      });
    }

    const id = fooditems.length + 1;
    const newItem = {
      id,
      foodName,
      price,
    };

    fooditems.push(newItem);
    localStorage.setItem("fooditems_data", JSON.stringify(fooditems));
    setFooditems(fooditems);
    setIsAdding(false);

    Swal.fire({
      icon: "success",
      title: "Added!",
      text: `${foodName} ${price}'s data has been Added.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container">
      <form onSubmit={handleAdd}>
        <h1>Add FoodItem</h1>
        <label htmlFor="firstName">Food Name</label>
        <input
          id="foodName"
          type="text"
          name="foodName"
          value={foodName}
          onChange={(e) => setFoodName(e.target.value)}
        />
        <label htmlFor="price">Price ($)</label>
        <input
          id="price"
          type="number"
          name="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <div style={{ marginTop: "30px" }}>
          <input type="submit" value="Add" />
          <input
            style={{ marginLeft: "12px" }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsAdding(false)}
          />
        </div>
      </form>
    </div>
  );
};

export default Add;
