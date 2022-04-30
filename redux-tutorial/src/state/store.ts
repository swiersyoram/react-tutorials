import { configureStore } from "@reduxjs/toolkit";
import thunk, { ThunkAction } from "redux-thunk";
import { BankAction } from "./actions/bankactions";
import accountReducer from "./reducers/accountReducer";

export const store = configureStore({ reducer: { account: accountReducer } });
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  BankAction
>;
