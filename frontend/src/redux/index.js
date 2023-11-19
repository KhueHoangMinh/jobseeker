// import { applyMiddleware, legacy_createStore as createStore } from "redux";
// import { reducer as companyReducer } from "./companyReducer/reducer";
// import thunk from "redux-thunk";

// const store = createStore(companyReducer, applyMiddleware(thunk));

// export { store };

import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./userReducer/userSlice";

const store = configureStore({
    reducer: {
        auth: authSlice.reducer
    }
})

export default store;