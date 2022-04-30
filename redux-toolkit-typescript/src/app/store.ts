import { configureStore } from "@reduxjs/toolkit";
import reservationsReducer from "../features/reservationSlice";
import seatedReducer from "../features/seatedSlice";
export const store = configureStore({
  reducer: {
    reservations: reservationsReducer,
    seated: seatedReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
