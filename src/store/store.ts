import { configureStore } from "@reduxjs/toolkit";
import notesReducer from "./notes.store";
import notesMiddleware from "./notes.middleware";
const store = configureStore({
  reducer: { notes: notesReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(notesMiddleware),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
