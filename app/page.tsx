"use client";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import { Provider } from "react-redux";
import { store } from "./Store/store";

export default function Page() {
  return (
    <Provider store={store}>
      <Navbar />
      <Login />
    </Provider>
  );
}
