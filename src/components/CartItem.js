const CartItem = (props) => {
  return (
    <li className="flex items-center p-5 w-full space-x-3">
      <span className="w-32 border border-gray-400">
        <img src={props.img} alt={props.name} className="object-cover" />
      </span>
      <span>
        <h1 className="w-full font-bold uppercase text-md">{props.name}</h1>
        <h1 className="w-full text-gray-500 text-sm">
          R$ {props.originalPrice}
        </h1>
        <h1 className="w-full">R$ {props.price}</h1>
      </span>
    </li>
  );
};

export default CartItem;
