import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./core/auth/Login";
import Register from "./core/auth/Register";
import Home from "./core/screens/Home/Home";
import AboutUs from "./core/screens/AboutUs/AboutUs";
import Gallery from "./core/screens/Gallery/Gallery";
import ContactUs from "./core/screens/ContactUs/ContactUs";
import PageNotFound from "./core/PageNotFound";
import ListCategory from "./features/categories/ListCategory";
import CreateCategory from "./features/categories/CreateCategory/CreateCategory";
import EditCategory from "./features/categories/EditCategory";
import { RouteConstants } from "./shared/constants/RouteConstants";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  
  return (
    <div>
      <BrowserRouter>
          <Routes>
            <Route path={RouteConstants.ABOUT_US} element={<AboutUs />} />
            <Route path={RouteConstants.GALLERY} element={<Gallery />} />
            <Route path={RouteConstants.CONTACT_US} element={<ContactUs />} />
            {/* Auth */}
            <Route path={RouteConstants.REGISTER} element={<Register />} />
            <Route path={RouteConstants.LOGIN} element={<Login />} />
            <Route path={RouteConstants.LIST_CATEGORY} element={<ListCategory />} />
            <Route path={RouteConstants.CREATE_CATEGORY} element={<CreateCategory />} />
            <Route path={RouteConstants.EDIT_CATEGORY+':categoryId'} element={<EditCategory />} />
            {/* Home */}
            <Route exact path={RouteConstants.HOME} element={<Home />} />
            {/* Wild card routes */}
            <Route path={RouteConstants.NOT_FOUND} element={<PageNotFound />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
