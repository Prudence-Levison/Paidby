import { useSelector } from "react-redux" ;
import { RootState } from "../Store/store";


 export const Dashboard = () => {
    const user = useSelector ((state: RootState) => state.user);
  return (
    <div>
      {user && <p>{user.email}</p>}
    </div>
  )
}

export default Dashboard
