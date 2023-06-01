import { Link } from "react-router-dom";
import { BiSearch, BiMenu } from "react-icons/bi";
import { AiFillHome } from "react-icons/ai";
import { FcAbout } from "react-icons/fc";
import { AiFillPhone } from "react-icons/ai";
import { AiOutlineLogin } from "react-icons/ai";
import { VscAccount } from "react-icons/vsc";
import { MdDashboard } from "react-icons/md";
import { HiOutlineLogout } from "react-icons/hi";
import { BsCartFill } from "react-icons/bs";
const Navbar = () => {
  return (
    <div className="w-[100vw] h-[60px]    bg-black text-white flex items-center p-3 justify-between">
      {/* logo starts */}
      <h1 className="logo">
        <Link to="/">
          {" "}
          <em className="text-2xl font-semibold cursor-pointer">Fumess</em>
        </Link>
      </h1>
      {/* logo ends */}

      {/* searchbar starts */}
      <div className="search hidden  md:flex md:justify-between   bg-white h-[35px] w-[350px]  ">
        <input
          type="text"
          className=" p-2 h-[100%] text-black w-[100%]"
          placeholder="Search Products..."
        />
        <div className="search-icon text-black z-100 bg-white text-xl flex items-center cursor-pointer justify-center h-[35px]   p-2">
          <BiSearch />
        </div>
      </div>
      {/* searchbar ends */}

      {/* menu section starts */}
      <Link to="/cart">
        <div className="ic absolute top-[5px] right-[60px] text-2xl h-[60px] p-4   ">
          <BsCartFill />
          <div className="count relative top-[-40px] animate-pulse  left-[15px] h-[20px] w-[20px] rounded-full bg-white text-black  font-bold flex items-center justify-center text-sm">
            <span>0</span>
          </div>
        </div>
      </Link>
      <div className="dropdown">
        <button className="dropbtn">
          <BiMenu />
        </button>
        <div className="dropdown-content pt-[20px]">
          <Link
            to="/"
            className=" linkk  h-[30px] w-[30px] rounded-full flex items-center justify-center bg-white text-black mb-3 "
          >
            <AiFillHome />
            <div className=" custom  opacity-70  right-[4rem] bg-black text-white text-sm p-1 ">
              HOME
            </div>
          </Link>
          <Link
            to="/about"
            className=" linkk h-[30px] w-[30px] rounded-full flex items-center justify-center  bg-white text-black mb-3"
          >
            <FcAbout />
            <div className=" custom  opacity-70  right-[4rem] bg-black text-white text-sm p-1 ">
              About
            </div>
          </Link>
          <Link
            to="/contact"
            className=" linkk h-[30px] w-[30px] rounded-full flex items-center justify-center  bg-white text-black mb-3"
          >
            <AiFillPhone />
            <div className=" custom opacity-70   right-[4rem] bg-black text-white text-sm p-1 ">
              CONTACT
            </div>
          </Link>
          <Link
            to="/login"
            className=" linkk h-[30px] w-[30px] rounded-full flex items-center justify-center  bg-white text-black mb-3"
          >
            <AiOutlineLogin />
            <div className=" custom opacity-70   right-[4rem] bg-black text-white text-sm p-1 ">
              LOGIN
            </div>
          </Link>
          <Link
            to="/register"
            className=" linkk h-[30px] w-[30px] rounded-full flex items-center justify-center  bg-white text-black mb-3"
          >
            <VscAccount />
            <div className=" custom opacity-70   right-[4rem] bg-black text-white text-sm p-1 ">
              REGISTER
            </div>
          </Link>
          <Link
            to="/dashboard"
            className=" linkk h-[30px] w-[30px] rounded-full flex items-center justify-center  bg-white text-black mb-3"
          >
            <MdDashboard />
            <div className=" custom opacity-70   right-[4rem] bg-black text-white text-sm p-1 ">
              DASHBOARD
            </div>
          </Link>
          <Link
            to="/"
            className=" linkk h-[30px] w-[30px] rounded-full flex items-center justify-center  bg-white text-black mb-3"
          >
            <HiOutlineLogout />
            <div className=" custom opacity-70   right-[4rem] bg-black text-white text-sm p-1 ">
              LOGOUT
            </div>
          </Link>
        </div>
      </div>

      {/* menu section ends  */}
    </div>
  );
};
// HiOutlineLogout
export default Navbar;
