import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import MainLayout from "./Layouts/MainLayout";
import HomePage from "./pages/Homepage";
import Deliveriespage from "./pages/Deliveriespage";
import Deliverypage, {orderLoader} from "./pages/Deliverypage";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/orders' element={<Deliveriespage />} />
        <Route path='/orders/:id' element={<Deliverypage />} loader={orderLoader} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}
 
export default App;