import CartItem from "./CartItem";
import axios from "axios";
import { useState, useEffect } from "react";

const Main = (props) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState([]);
  const [error, setError] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:3001/below");
        setData(response.data);
        setLoading(false);
      } catch (e) {
        setLoading(false);
        setError(true);
        console.log(e);
      }
    };
    fetchData();
  }, []);

  const calculateTotal = () => {
    let total = 0;
    data.items.map((item) => (total += item.sellingPrice / 100));
    return total;
  };

  return (
    <div className="lg:w-1/4 shadow-xl rounded-lg bg-white ">
      <h1 className="lg:w-full py-2 text-lg text-center border-b font-bold">
        Meu carrinho
      </h1>
      <div className="lg:w-full">
        <ul className="border-b padding-5 border-gray-200">
          {!loading &&
            data.items.map((item) => (
              <CartItem
                key={item.uniqueId}
                img={item.imageUrl}
                name={item.name}
                originalPrice={item.price / 100}
                price={item.sellingPrice / 100}
                total={item.total}
              />
            ))}
        </ul>
        {!loading && (
          <div className="flex justify-between font-bold m-5">
            <span>Total:</span>
            <span>{calculateTotal()}</span>
          </div>
        )}
        <div className="flex justify-center">
          <button
            type="button"
            className="bg-blue-500 text-white shadow-md px-5 py-2 m-5 w-full rounded-md"
          >
            Finalizar compra
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
