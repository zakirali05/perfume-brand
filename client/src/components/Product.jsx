import { FaShoppingCart } from "react-icons/fa";
import { AiTwotoneStar } from "react-icons/ai";
const Product = ({ image, title, rating }) => {
  //   const returnStar = (num) => {
  //     for (let i = 0; i < num; i++) {
  //       return (
  //         <span key={i}>
  //           <AiTwotoneStar />
  //         </span>
  //       );
  //     }
  //   };
  return (
    <div className="w-[80vw] md:w-[45vw] lg:w-[20vw] flex flex-col items-center justify-center h-[400px] shadow-lg">
      <img
        src={image}
        alt="img"
        className=" w-[100%] h-[50%]    md:h-[50%] md:w-[100%] object-cover "
      />
      <div className="info h-[50%] w-[100%] flex flex-col items-center justify-center p-2 gap-2">
        <p className="text-xl font-semibold ">{title}</p>
        <p className="flex gap-1">
          <AiTwotoneStar />
          <AiTwotoneStar />
          <AiTwotoneStar />
          <AiTwotoneStar />
          <AiTwotoneStar />
        </p>
        <button className="font-semibold hover:underline">View More</button>
        <button className="bg-black text-white  p-2 w-[80%]  md:w-[100%] flex gap-2 items-center justify-center">
          Add To Cart
          <FaShoppingCart />
        </button>
      </div>
    </div>
  );
};

export default Product;
