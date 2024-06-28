import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { SuscripcionApi } from "@/services/suscripcion/suscripcionApi";
import { consultarApi } from "@/services/consulta/consultaEmpresa";
import { AuthenticationApi } from "@/services/login/login";
import sidebarReducer from "@/lib/features/sidebar/sidebarSlice";
import userAuthReducer from "@/lib/features/userAuth/userAuthSlice";
import formReducer from "@/lib/features/form/formSlice";
/* import suscripcionLocalReducer from '@/lib/features/suscripcion/suscripcionLocalSlice' */
import suscripcionCookieSlice from "@/lib/features/suscripcion/suscripcionCookieSlice";
import authReducer from "@/lib/features/auth/authSlice";
import apiReducer from "@/lib/features/api/apiSlice";
import { clientAPI } from "@/services/client/clientAPI";
import { empresaAPI } from "@/services/empresa/empresa";
import { clienteApi } from "@/services/cliente/cliente";

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
      [clientAPI.reducerPath]: clientAPI.reducer,
      [empresaAPI.reducerPath]: empresaAPI.reducer,
      [clienteApi.reducerPath]: clienteApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
        SuscripcionApi.middleware,
        consultarApi.middleware,
        AuthenticationApi.middleware,
        clientAPI.middleware,
        empresaAPI.middleware,
        clienteApi.middleware
      ),
  });
};

setupListeners(makeStore().dispatch);

export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
