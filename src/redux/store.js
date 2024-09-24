import { configureStore } from "@reduxjs/toolkit";
import { dataReducer } from "./dataSlice";
import { srcDataReducer } from "./srcDataSlice";
export default configureStore({
  reducer: {
    putData: dataReducer,
    srcDataImput: srcDataReducer,
  },
});
