import Admin from "./pages/Admin";
import Auth from "./pages/Auth";
import DevicePage from "./pages/DevicePage";
import Feedback from "./pages/Feedback";
import Shop from "./pages/Shop";
import MainPage from "./pages/MainPage";
import FAQ from "./pages/FAQ";
import {
  ADMIN_ROUTE,
  DEVICE_ROUTE,
  FEEDBACK_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  SHOP_ROUTE,
  MAIN_ROUTE,
  FAQ_ROUTE,
  CONTACT_ROUTE,
} from "./utils/consts";
import Contacts from "./pages/Contacts";

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: Admin,
  },
];

export const publicRoutes = [
  {
    path: SHOP_ROUTE,
    Component: Shop,
  },
  {
    path: LOGIN_ROUTE,
    Component: Auth,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Auth,
  },
  {
    path: DEVICE_ROUTE + "/:id",
    Component: DevicePage,
  },
  {
    path: FEEDBACK_ROUTE,
    Component: Feedback,
  },
  {
    path: MAIN_ROUTE,
    Component: MainPage,
  },
  {
    path: FAQ_ROUTE,
    Component: FAQ,
  },
  {
    path: CONTACT_ROUTE,
    Component: Contacts,
  },
];
