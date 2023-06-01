import { TiTick } from "react-icons/ti";
const WhyUs = () => {
  return (
    <div className="my-[4rem]">
      <h1 className="text-center font-bold text-4xl font-[cursive] my-[4rem]">
        Why Us?
      </h1>
      <div className="w-[100vw]  flex flex-wrap gap-8   md:gap-2 items-start justify-center  ">
        <div className="left  w-[100%] md:w-[45%] p-2   ">
          <img
            src="https://images.unsplash.com/photo-1545840716-c82e9eec6930?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVyZnVtZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
            className=" mx-auto  w-[90%]  md:w-[100%] h-[400px] object-cover"
            alt=""
          />
        </div>
        <div className="right  w-[100%] md:w-[45%] px-8 flex flex-col gap-3 font-[cursive] ">
          <h1 className="text-2xl font-semibold mb-4 ">
            Best selling perfume brand in india for a reason
          </h1>
          <p>
            <span className="flex gap-2 items-center text-xl ">
              <TiTick />
              Provide best quality perfumes
            </span>
          </p>
          <p>
            <span className="flex gap-2 items-center  text-xl  ">
              <TiTick />
              Longlasting upto 72 hours
            </span>
          </p>
          <p>
            <span className="flex gap-2 items-center  text-xl  ">
              <TiTick />
              Super fast delivary within 48 hours
            </span>
          </p>
          <p>
            <span className="flex gap-2 items-center  text-xl  ">
              <TiTick />
              No side effect on your skin
            </span>
          </p>
          <p>
            <span className="flex gap-2 items-center  text-xl  ">
              <TiTick />
              Refreshing fragnance at affordable price
            </span>
          </p>
          <p>
            <span className="flex gap-2 items-center   text-xl ">
              <TiTick />
              Track your order
            </span>
          </p>
          <p>
            <span className="flex gap-2 items-center  text-xl ">
              <TiTick />
              24 hours open customer support center
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
