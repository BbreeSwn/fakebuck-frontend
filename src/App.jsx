import AuthContextProvider from "./context/authContext";
import Router from "./routes";
import { ToastContainer, Slide } from "react-toastify";

function App() {
  return (
    <AuthContextProvider>
      <Router />
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        transition={Slide}
      />
    </AuthContextProvider>
  );
}

export default App;
