import React from "react";

const Table = ({ fooditems, handleEdit, handleDelete }) => {
  fooditems.forEach((foodItem, i) => {
    foodItem.id = i + 1;
  });

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: null,
  });

  return (
    <div className="contain-table">
      <table className="striped-table">
        <thead>
          <tr>
            <th>No.</th>
            <th>Food Name</th>
            <th>Price</th>
            <th colSpan={2} className="text-center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {fooditems.length > 0 ? (
            fooditems.map((foodItem, i) => (
              <tr key={foodItem.id}>
                <td>{i + 1}</td>
                <td>{foodItem.foodName}</td>
                <td>{formatter.format(foodItem.price)}</td>
                <td className="text-right">
                  <button
                    onClick={() => handleEdit(foodItem.id)}
                    className="button muted-button"
                  >
                    Edit
                  </button>
                </td>
                <td className="text-left">
                  <button
                    onClick={() => handleDelete(foodItem.id)}
                    className="button muted-button"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7}>No Fooditems</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
