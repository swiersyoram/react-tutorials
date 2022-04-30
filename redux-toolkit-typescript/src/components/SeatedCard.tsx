import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addFood, table } from "../features/seatedSlice";

type Props = {
  customer: table;
};

function SeatedCard({ customer }: Props) {
  const dispatch = useDispatch();
  const [foodinput, setfoodinput] = useState("");

  return (
    <div className="customer-food-card-container">
      <p>{customer.name}</p>
      <div className="customer-foods-container">
        {customer.food?.map((item) => {
          return (
            <div className="customer-food" key={item}>
              {item}
            </div>
          );
        })}
        <div className="customer-food-input-container">
          <input
            value={foodinput}
            onChange={(e) => setfoodinput(e.target.value)}
          />
          <button
            onClick={() => {
              if (foodinput != "")
                dispatch(addFood({ food: foodinput, name: customer.name }));
              setfoodinput("");
            }}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default SeatedCard;
