"use client";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import { Provider } from "react-redux";
import { store } from "./Store/store";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Page() {
  return (
    <Provider store={store}>
      <Navbar />
      <Login />
      <ToastContainer position="top-right" />
    </Provider>
  );
}
