import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import "./App.css";
import Routes from "./routes";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
      <ToastContainer autoClose={4000} />
        <Routes />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
