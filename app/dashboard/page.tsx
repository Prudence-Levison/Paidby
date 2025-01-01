"use client";
import { useSelector, Provider } from "react-redux" ;
import { RootState } from "../Store/store";
import { store } from "../Store/store";


 export const Dashboard = () => {
    // const user = useSelector ((state: RootState) => state.user);
  return (
    // <Provider store={store}>
    <div>
      <p>Hi</p>
      {/* {user && <p>{user.email}  Hiiii, You have successfully logged in</p>} */}
    </div>
    // </Provider>
  )
}

export default Dashboard
