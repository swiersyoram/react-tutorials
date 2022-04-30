import React from "react";
import { useDispatch } from "react-redux";
import { removeReservation } from "../features/reservationSlice";
import { addSeated } from "../features/seatedSlice";

type Props = {
  name: string;
  index: number;
};

function ReservationCard({ name, index }: Props) {
  const dispatch = useDispatch();
  return (
    <div
      className="reservation-card-container"
      onClick={() => {
        dispatch(removeReservation(index));
        dispatch(addSeated({ name: name, food: [] }));
      }}
    >
      {name}
    </div>
  );
}

export default ReservationCard;
