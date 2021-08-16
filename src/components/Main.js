import CartItem from "./CartItem";
import Modal from "./Modal";
import { useState, useEffect } from "react";

import axios from "axios";
import currency from "currency.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch, faTimes } from "@fortawesome/free-solid-svg-icons";

const Main = (props) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`/${props.cart}`);

        setData(response.data);
        setLoading(false);
      } catch (e) {
        setLoading(false);
        setError(true);
      }
    };
    fetchData();
  }, [props.cart]);

  const calculateTotal = () => {
    let total = 0;
    data.items.map((item) => (total += item.sellingPrice));
    return BRL(total);
  };

  const BRL = (value) =>
    currency(value / 100, {
      symbol: "R$",
      precision: 2,
      decimal: ",",
      separator: ".",
    });

  return (
    <div className="mx-2 lg:w-1/3 shadow-xl rounded-lg bg-white mb-10 ">
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <h1 className="lg:w-full py-2 text-lg text-center border-b font-bold">
        Meu carrinho
      </h1>
      <div className="lg:w-full">
        {loading && (
          <div className="flex flex-col w-full justify-center content-center items-center space-y-3 my-5">
            <FontAwesomeIcon
              icon={faCircleNotch}
              className="animate-spin"
              size={"2x"}
            />
            <span className="text-2xl">Loading...</span>
          </div>
        )}
        {error && (
          <div className="flex flex-col w-full justify-center content-center items-center space-y-3 my-5">
            <FontAwesomeIcon
              icon={faTimes}
              className="animate-spin"
              size={"2x"}
            />
            <span className="text-2xl">Loading...</span>
          </div>
        )}
        <ul className="border-b padding-5 border-gray-200">
          {!loading &&
            !error &&
            data.items.map((item) => (
              <CartItem
                key={item.uniqueId}
                img={item.imageUrl}
                name={item.name}
                originalPrice={BRL(item.price).format()}
                price={BRL(item.sellingPrice).format()}
              />
            ))}
        </ul>
        {!loading && (
          <div className="flex justify-between font-bold m-5">
            <span>Total:</span>
            <span>{calculateTotal().format()}</span>
          </div>
        )}
        {!loading && calculateTotal().dollars() > 10 && (
          <div className="flex flex-col justify-center content-center items-center">
            <span className="text-xs md:text-base w-3/4 rounded-full bg-green-200 text-green-800 py-2 px-3 m-5 text-center ">
              Parabéns, sua compra tem frete grátis!
            </span>
          </div>
        )}
        <div className="w-full border-b border-gray-200"></div>
        <div className="flex justify-center">
          <button
            type="button"
            className="w-full bg-blue-500 text-white shadow-md px-5 py-2 m-5 rounded-md font-bold hover:bg-blue-600 active:bg-blue-700"
            disabled={loading}
            onClick={() => setShowModal(true)}
          >
            Finalizar compra
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
