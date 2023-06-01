import {
  FaInstagramSquare,
  FaPinterestSquare,
  FaCcAmazonPay,
  FaCcApplePay,
  FaCcPaypal,
} from "react-icons/fa";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from "react-icons/ai";

import { MdPayments } from "react-icons/md";
const Footer = () => {
  return (
    <div className="w-[100vw] bg-black text-white p-4 flex flex-col items-center justify-center gap-4 mt-[4rem]">
      <div className="top h-[50%]    flex items-center  justify-around w-[100vw]">
        <div className="l flex gap-3 text-2xl md:text-3xl ">
          <FaInstagramSquare />
          <AiFillFacebook />
          <AiFillLinkedin />
          <AiFillTwitterSquare />
          <FaPinterestSquare />
        </div>
        <div className="r flex gap-3 text-2xl  md:text-3xl  ">
          <FaCcAmazonPay />
          <FaCcApplePay />
          <FaCcPaypal />
          <MdPayments />
        </div>
      </div>
      <div className="bottom h-[50%] text-center text-md font-semibold opacity-[0.7]">
        copyright@2023
      </div>
    </div>
  );
};

export default Footer;
