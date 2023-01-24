import { configureStore } from "@reduxjs/toolkit";
import { carsReducer, changeSearchTerm, addCar, removeCar } from "./slices/carsSlice";
import { formReducer, changeName, changeCost } from "./slices/formSlice";

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    form: formReducer,
  },
});

export { changeSearchTerm, changeName, changeCost, addCar, removeCar };
