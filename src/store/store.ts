import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import detailsBooksSlice from "./slices/detailsBooksSlice";
import favoriteBooksSlice from "./slices/favoriteBooksSlice";
import newBooksSlice from "./slices/newBooksSlice";
import searchBooksSlice from "./slices/searchBooksSlice";
import userSlice from "./slices/userSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import recommendedBooksSlice from "./slices/recommendedBooksSlice";
import navSearchBooksSlice from "./slices/navSearchBooksSlice";

const rootReducer = combineReducers({
  cartRoot: cartSlice,
  favoriteBookRoot: favoriteBooksSlice,
  userRoot: userSlice,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: {
    user: persistedReducer,
    newBooks: newBooksSlice,
    searchBooks: searchBooksSlice,
    navSearchBooks: navSearchBooksSlice,
    detailsBook: detailsBooksSlice,
    favoriteBook: persistedReducer,
    cart: persistedReducer,
    recommendedBooks: recommendedBooksSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type RootPersistorState = ReturnType<typeof persistor.getState>;

export type AppDispatch = typeof store.dispatch;
