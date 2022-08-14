import React, { useState } from "react";
import Swal from "sweetalert2";

const Edit = ({ fooditems, selectedFoodItem, setFooditems, setIsEditing }) => {
  const id = selectedFoodItem.id;

  const [foodName, setFoodName] = useState(selectedFoodItem.foodName);
  const [price, setPrice] = useState(selectedFoodItem.price);

  const handleUpdate = (e) => {
    e.preventDefault();

    if (!foodName || !price) {
      return Swal.fire({
        icon: "error",
        title: "Error!",
        text: "All fields are required.",
        showConfirmButton: true,
      });
    }

    const foodItem = {
      id,
      foodName,
      price,
    };

    for (let i = 0; i < fooditems.length; i++) {
      if (fooditems[i].id === id) {
        fooditems.splice(i, 1, foodItem);
        break;
      }
    }

    localStorage.setItem("fooditems_data", JSON.stringify(fooditems));
    setFooditems(fooditems);
    setIsEditing(false);

    Swal.fire({
      icon: "success",
      title: "Updated!",
      text: `${foodItem.foodName} ${foodItem.price}'s data has been updated.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container">
      <form onSubmit={handleUpdate}>
        <h1>Edit FoodItem</h1>
        <label htmlFor="foodName">Food Name</label>
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
          <input type="submit" value="Update" />
          <input
            style={{ marginLeft: "12px" }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsEditing(false)}
          />
        </div>
      </form>
    </div>
  );
};

export default Edit;
