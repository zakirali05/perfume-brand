import React from "react";
import Products from "../components/Products";
import WhyUs from "../components/WhyUs";
import Reviews from "../components/Reviews";

const Home = () => {
  return (
    <div>
      {/* carousel starts     */}
      <div id="carouselExampleIndicators" className="carousel slide  ">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active ">
            <img
              src="https://perfumesteal.com/cdn/shop/files/Non-Alcoholic_Perfumes_32_1895x758.png?v=1669715653"
              className="d-block w-100 "
              alt="IMAGE1"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://perfumesteal.com/cdn/shop/files/Non-Alcoholic_Perfumes_32_1895x758.png?v=1669715653"
              className="d-block w-100  "
              alt="IMAGE2"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://perfumesteal.com/cdn/shop/files/Non-Alcoholic_Perfumes_32_1895x758.png?v=1669715653"
              className="d-block w-100  "
              alt="IMAGE3"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* carousel ends      */}

      <div className="sections w-[100vw] flex flex-wrap my-4 ">
        <div className=" p-2   man w-[90%] mx-auto md:w-[50%] lg:w-[25%] flex flex-col items-center justify-start gap-8 ">
          <div className="image w-[100%] h-[60%] object-cover bg-black">
            <img
              className="w-[100%] h-[100%] object-cover"
              src="https://media.istockphoto.com/id/1316117134/photo/beautiful-masculine-bearded-young-man-holding-a-bottle-of-fragrance.jpg?s=612x612&w=0&k=20&c=ju8M6LVJOccDx486UNSuSTc7qtEzzZpgI4dEfYDsai4="
              alt=""
            />
          </div>
          <div className="info flex flex-col items-center justify-center p-4 gap-3 ">
            <h1 className="text-black text-2xl font-semibold">
              Man's Collection
            </h1>
            <button className="bg-black text-white  p-2">View more</button>
          </div>
        </div>
        <div className=" p-2   women w-[90%] mx-auto md:w-[50%] lg:w-[25%]   flex flex-col items-center justify-start  gap-8 ">
          <div className="image w-[100%] h-[60%] object-cover bg-black">
            <img
              className="w-[100%] h-[100%] object-cover"
              src="https://media.istockphoto.com/id/1262451324/photo/merry-pretty-woman-using-fragrance-for-body.jpg?s=612x612&w=0&k=20&c=hwBS7z9ivburAdfz9kYxCupOcLIX6gULrY5NMeqlol4="
              alt=""
            />
          </div>
          <div className="info flex flex-col items-center justify-center p-4 gap-3">
            <h1 className="text-black text-2xl font-semibold">
              Women's Collection
            </h1>
            <button className="bg-black text-white  p-2">View more</button>
          </div>
        </div>
        <div className=" p-2   children w-[90%] mx-auto md:w-[50%] lg:w-[25%]  flex flex-col items-center justify-start  gap-8">
          <div className="image w-[100%] h-[60%] object-cover bg-black">
            <img
              className="w-[100%] h-[100%] object-cover"
              src="https://media.istockphoto.com/id/1302383256/photo/beautiful-little-girl-sniffs-perfume-from-a-bottle-in-dark-settings.jpg?s=612x612&w=0&k=20&c=dI8WICOXelRQL0puSV6WGvNKxlPl0WlxOExcy_Plng0="
              alt=""
            />
          </div>
          <div className="info flex flex-col items-center justify-center p-4 gap-3">
            <h1 className="text-black text-2xl font-semibold">
              Children's Collection
            </h1>
            <button className="bg-black text-white  p-2">View more</button>
          </div>
        </div>
        <div className=" p-2   best w-[90%] mx-auto md:w-[50%] lg:w-[25%]  flex flex-col items-center justify-start  gap-8">
          <div className="image w-[100%] h-[60%] object-cover bg-black">
            <img
              className="w-[100%] h-[100%] object-cover"
              src="https://media.istockphoto.com/id/1144740142/photo/close-up-of-spray-or-perfume-of-indian-jasmine-flower-or-juhi-or-jasminum-auriculatum-on.jpg?s=612x612&w=0&k=20&c=LQVUusHcjpqpkIQj84maJyBwdkF8nolbZGFXfzsE2ok="
              alt=""
            />
          </div>
          <div className="info flex flex-col items-center justify-center p-4 gap-3">
            <h1 className="text-black text-2xl font-semibold">Best Combos</h1>
            <button className="bg-black text-white  p-2">View more</button>
          </div>
        </div>
      </div>

      {/* prodcuts section starts */}
      <Products />
      {/* products section ends */}

      {/* why us sections starts */}
      <WhyUs />
      {/* why us section ends */}

      {/* reviews section starts*/}
      <Reviews />
      {/* reviews section ends  */}
      {/* FAQ */}
      {/* request a perfume */}
    </div>
  );
};

export default Home;
