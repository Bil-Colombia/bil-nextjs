import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { SuscripcionApi } from "@/services/suscripcion/suscripcionApi";
import { consultarApi } from "@/services/consulta/consultaEmpresa";
import { AuthenticationApi } from "@/services/login/loginAuthentication";
import sidebarReducer from "@/lib/features/sidebar/sidebarSlice";
import userAuthReducer from "@/lib/features/userAuth/userAuthSlice";
import formReducer from "@/lib/features/form/formSlice";
/* import suscripcionLocalReducer from '@/lib/features/suscripcion/suscripcionLocalSlice' */
import suscripcionCookieSlice from "@/lib/features/suscripcion/suscripcionCookieSlice";
import authReducer from "@/lib/features/auth/authSlice";
import apiReducer from "@/lib/features/api/apiSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      sidebar: sidebarReducer,
      userAuth: userAuthReducer,
      form: formReducer,
      /* suscripcion: suscripcionLocalReducer, */
      suscripcion: suscripcionCookieSlice,
      auth: authReducer,
      api: apiReducer,
      [SuscripcionApi.reducerPath]: SuscripcionApi.reducer,
      [consultarApi.reducerPath]: consultarApi.reducer,
      [AuthenticationApi.reducerPath]: AuthenticationApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
        SuscripcionApi.middleware,
        consultarApi.middleware,
        AuthenticationApi.middleware
      ),
  });
};

setupListeners(makeStore().dispatch);

export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
