"use client";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import { Provider } from "react-redux";
import { store } from "./Store/store";
// import Dashboard from "./dashboard/page";

export default function Page() {
  return (
    <Provider store={store}>
      <Navbar />
      <Login />
      {/* <Dashboard /> */}
    </Provider>
  );
}
