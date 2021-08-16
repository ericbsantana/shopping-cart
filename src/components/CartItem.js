const CartItem = (props) => {
  return (
    <li className="flex items-center p-5 w-full space-x-3">
      <span className="w-1/3  ">
        <img
          src={props.img}
          alt={props.name}
          className="w-24 h-24 object-center object-cover border border-gray-400"
        />
      </span>
      <span className="w-full">
        <h1 className="w-full font-bold uppercase text-md">{props.name}</h1>
        <h1 className="w-full text-gray-400 text-xs line-through">
          {props.originalPrice}
        </h1>
        <h1 className="w-full">{props.price}</h1>
      </span>
    </li>
  );
};

export default CartItem;
