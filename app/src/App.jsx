import "./App.css";
import Navbar from "./components/navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Dashboard from "./pages/dashboard";
import { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { autoSignin } from "./redux/userdata";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(autoSignin());
  }, []);
  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route exect path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Fragment>
  );
}

export default App;
