import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";

import Header from "./Header";
import Table from "./Table";
import Add from "./Add";
import Edit from "./Edit";

import { foodsData } from "../../data";

const Dashboard = () => {
  const [fooditems, setFooditems] = useState(foodsData);
  const [selectedFoodItem, setSelectedFoodItem] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("fooditems_data"));
    if (data !== null && Object.keys(data).length !== 0) setFooditems(data);
  }, []);

  const handleEdit = (id) => {
    const [foodItem] = fooditems.filter((foodItem) => foodItem.id === id);

    setSelectedFoodItem(foodItem);
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    Swal.fire({
      icon: "warning",
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
    }).then((result) => {
      if (result.value) {
        const [foodItem] = fooditems.filter((foodItem) => foodItem.id === id);

        Swal.fire({
          icon: "success",
          title: "Deleted!",
          text: `${foodItem.foodName} ${foodItem.price}'s data has been deleted.`,
          showConfirmButton: false,
          timer: 1500,
        });

        const fooditemsCopy = fooditems.filter(
          (foodItem) => foodItem.id !== id
        );
        localStorage.setItem("fooditems_data", JSON.stringify(fooditemsCopy));
        setFooditems(fooditemsCopy);
      }
    });
  };

  return (
    <div className="container">
      {!isAdding && !isEditing && (
        <>
          <Header
            setIsAdding={setIsAdding}
            // setIsAuthenticated={setIsAuthenticated}
          />
          <Table
            fooditems={fooditems}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </>
      )}
      {isAdding && (
        <Add
          fooditems={fooditems}
          setFooditems={setFooditems}
          setIsAdding={setIsAdding}
        />
      )}
      {isEditing && (
        <Edit
          fooditems={fooditems}
          selectedFoodItem={selectedFoodItem}
          setFooditems={setFooditems}
          setIsEditing={setIsEditing}
        />
      )}
    </div>
  );
};

export default Dashboard;
