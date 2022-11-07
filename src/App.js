import "./App.css";
import { toast } from "react-toastify";

function App() {
  const handelTost = () => {
    toast.success("🦄 Wow so easy!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  return (
    <div className="App">
      <button onClick={handelTost}>click mem</button>
    </div>
  );
}

export default App;
