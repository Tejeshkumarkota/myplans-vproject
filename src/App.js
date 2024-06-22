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
import CreateCategory from "./features/categories/CreateCategory";
import EditCategory from "./features/categories/EditCategory";

function App() {
  
  return (
    <div>
      <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact-us" element={<ContactUs />} />
            {/* Wild card routes */}
            <Route path="/*" element={<PageNotFound />} />
            {/* Auth */}
            <Route path="/sign-up" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/list" element={<ListCategory />} />
            <Route path="/create" element={<CreateCategory />} />
            <Route path="/edit/:studentid" element={<EditCategory />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
