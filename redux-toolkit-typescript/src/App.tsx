import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { RootState } from "./app/store";
import ReservationCard from "./components/ReservationCard";
import SeatedCard from "./components/SeatedCard";
import { addReservation } from "./features/reservationSlice";

function App() {
  const [reservationname, setreservationname] = useState("");
  const reservations = useSelector((state: RootState) => {
    console.log(state);

    return state.reservations.value;
  });

  const seated = useSelector((state: RootState) => {
    return state.seated.value;
  });
  const dispatch = useDispatch();

  const AddReservation = () => {
    if (reservationname != "") dispatch(addReservation(reservationname));
    setreservationname("");
  };
  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              {reservations.map((name, index) => (
                <ReservationCard
                  name={name}
                  index={index}
                  key={name}
                ></ReservationCard>
              ))}
            </div>
          </div>
          <div className="reservation-input-container">
            <input
              value={reservationname}
              onChange={(e) => setreservationname(e.target.value)}
            />
            <button onClick={AddReservation}>Add</button>
          </div>
        </div>
        <div className="customer-food-container">
          {seated.map((item) => {
            return <SeatedCard customer={item} key={item.name}></SeatedCard>;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
