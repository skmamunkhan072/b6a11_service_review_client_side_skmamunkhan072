import { useContext } from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { AuthContext } from "./components/Contexts/AuthProvider/AuthProvider";
import { router } from "./components/Router/Routes/Routes";

function App() {
  const { thim } = useContext(AuthContext);
  return (
    <div className={`App ${thim ? "bg-white" : ""}`}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
