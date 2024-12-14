
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import { Provider } from "react-redux";
import  { store} from "./Store/store"

export default function Home() {
  return (
    <div>
      <Provider store={store} >
    <Navbar />
    <Login />
    </Provider>
    </div>
  );
}
