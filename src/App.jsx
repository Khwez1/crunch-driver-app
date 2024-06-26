import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import MainLayout from "./Layouts/MainLayout";
import HomePage from "./pages/Homepage";
import Deliveriespage from "./pages/Deliveriespage";
import Deliverypage, { orderLoader } from "./pages/Deliverypage";
import Aboutpage from "./pages/Aboutpage";
import Loginpage from "./pages/Loginpage";
import Registerpage from "./pages/Registerpage";
import { AuthProvider } from "./utils/AuthContext";
import PrivateRoutes from "./utils/PrivateRoutes";
import Indelivery from "./pages/Indelivery";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/orders" element={<Deliveriespage />} />
        <Route path="/orders/:id" element={<Deliverypage />} loader={orderLoader} />
      </Route>
      <Route path="/about" element={<Aboutpage />} />
      <Route path="/login" element={<Loginpage />} />
      <Route path="/signup" element={<Registerpage />} />
    </>
  )
);

const App = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
