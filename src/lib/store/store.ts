import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { SuscripcionApi } from "@/services/suscripcionApi";
import sidebarReducer from '@/lib/features/sidebar/sidebarSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      sidebar: sidebarReducer,
      [SuscripcionApi.reducerPath]: SuscripcionApi.reducer,
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(SuscripcionApi.middleware),
  });
};

setupListeners(makeStore().dispatch)

export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
