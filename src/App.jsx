import Router from "./routes";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
      <Router />
      <ToastContainer
      position="bottom-right"
      autoClose={3000} />
    </div>
  );
}

export default App;
