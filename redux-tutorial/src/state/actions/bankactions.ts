interface DepositAction {
  type: BankActionType.DEPOSIT;
  payload: number;
}
interface WithdrawAction {
  type: BankActionType.WITHDRAW;
  payload: number;
}

export type BankAction = DepositAction | WithdrawAction;

export enum BankActionType {
  DEPOSIT = "deposit",
  WITHDRAW = "withdraw",
}
