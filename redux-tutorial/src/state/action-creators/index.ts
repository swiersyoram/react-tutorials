import { BankAction, BankActionType } from "../actions/bankactions";
import { Dispatch } from "redux";
export const depositMoney = (amount: number) => {
  return (dispatch: Dispatch<BankAction>) => {
    dispatch({
      type: BankActionType.DEPOSIT,
      payload: amount,
    });
  };
};
export const withdrawMoney = (amount: number) => {
  return (dispatch: Dispatch<BankAction>) => {
    dispatch({
      type: BankActionType.DEPOSIT,
      payload: amount,
    });
  };
};
