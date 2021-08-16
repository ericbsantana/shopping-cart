import Main from "./components/Main";
import { useState } from "react";

const App = () => {
  const [cart, setCart] = useState("below");

  const toggleCart = () => {
    if (cart === "below") {
      setCart("above");
    } else {
      setCart("below");
    }
  };
  return (
    <div className="flex flex-col justify-center items-center bg-gray-200 min-h-screen font-poppins">
      <button
        className="bg-blue-500 text-white shadow-md px-5 py-2 m-5 rounded-md font-bold hover:bg-blue-600 active:bg-blue-700"
        onClick={toggleCart}
      >
        Change between carts
      </button>
      <Main cart={cart} />
    </div>
  );
};

export default App;
