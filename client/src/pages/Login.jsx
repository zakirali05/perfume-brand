import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
const Login = () => {
  return (
    <div className="h-[100vh] w-[100vw] flex justify-center items-center">
      <form className="w-[75vw]  md:w-[60vw] lg:w-[40vw]  bg-white shadow-md py-8  p-4 flex  justify-center ">
        <div className="container w-[85%]">
          {/* email section starts */}

          <div className="email flex flex-col mb-2">
            <label htmlFor="email" className="text-lg font-semibold">
              Email:
            </label>
            <input
              className="w-[100%]  border-black border-[1.5px] p-2 "
              type="email"
              name="email"
              placeholder="Enter your emailaddress..."
            />
          </div>
          {/* email section ends */}

          {/* password section starts */}
          <div className="password  flex flex-col mb-12">
            <label htmlFor="password" className="text-lg font-semibold">
              Password:
            </label>
            <input
              className="w-[100%]  border-black border-[1.5px] p-2"
              type="password"
              name="password"
              placeholder="Enter your password..."
            />
          </div>
          {/* password section ends */}

          {/* submit buttons starts */}
          <input
            type="submit"
            value="Login"
            className="w-[100%] p-2 bg-black text-white font-semibold text-center mb-3 hover:opacity-80
        "
          />
          {/* submit buttons ends */}

          {/* dont have an account section starts*/}
          <div className="register flex  w-[100%] justify-between ">
            <h3>Dont have an account ?</h3>
            <Link to="/register">
              <h2 className="cursor-pointer hover:underline">Register here</h2>
            </Link>
          </div>
          {/* dont have an account sections ends */}
        </div>
      </form>
    </div>
  );
};

export default Login;
