import {
  configureStore,
  ThunkAction,
  Action,
  createStore,
} from "@reduxjs/toolkit";
import { notesReducer } from "../noteReducer";

// export const store = configureStore({
//   reducer: {
//     note: notesReducer,
//   },
// });

export const store = createStore(notesReducer);
// export type AppDispatch = typeof store.dispatch;
// export type RootState = ReturnType<typeof store.getState>;
// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   RootState,
//   unknown,
//   Action<string>
// >;
