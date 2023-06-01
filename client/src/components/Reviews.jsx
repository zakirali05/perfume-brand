import { AiTwotoneStar } from "react-icons/ai";

const Reviews = () => {
  return (
    <div className="w-[100vw]">
      <h1 className="text-center font-bold text-4xl font-[cursive] my-[4rem]">
        Reviews
      </h1>
      <div className="reviews flex flex-wrap w-[100%] gap-[3rem] md:gap-[0] ">
        <div className="first h-[100%]  w-[100%] md:w-[33%]  flex flex-col items-center justify-center gap-2 ">
          <div className="img p-1 border-3 border-black rounded-full">
            <img
              className="h-[80px] w-[80px] object-cover rounded-full"
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsZSUyMGZhY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
              alt=""
            />
          </div>
          <h1 className="text-xl font-semibold font-[cursive]">
            Tom Hiddelson
          </h1>
          <p className="max-w-[300px] text-center">
            Nice frangnce , they are longlasting too...
          </p>
          <p className="flex gap-1">
            <AiTwotoneStar />
            <AiTwotoneStar />
            <AiTwotoneStar />
            <AiTwotoneStar />
            <AiTwotoneStar />
          </p>
        </div>
        <div className="second h-[100%  w-[100%] md:w-[33%] gap-2  flex flex-col items-center justify-center ">
          <div className="img p-1 border-3 border-black rounded-full">
            <img
              className="h-[80px] w-[80px] object-cover rounded-full"
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFsZSUyMGZhY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
              alt=""
            />
          </div>
          <h1 className="text-xl font-semibold font-[cursive]">Tony Majors</h1>
          <p className="max-w-[300px] text-center">
            Packaging is beautiful , best if you want to gift someone...
          </p>
          <p className="flex gap-1">
            <AiTwotoneStar />
            <AiTwotoneStar />
            <AiTwotoneStar />
            <AiTwotoneStar />
            <AiTwotoneStar />
          </p>
        </div>
        <div className="third h-[100%  w-[100%] md:w-[33%] gap-2    flex flex-col items-center justify-center">
          <div className="img p-1 border-3 border-black rounded-full">
            <img
              className="h-[80px] w-[80px] object-cover rounded-full"
              src="https://images.unsplash.com/photo-1512484776495-a09d92e87c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1hbGUlMjBmYWNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
              alt=""
            />
          </div>
          <h1 className="text-xl font-semibold font-[cursive]">
            Jonathan Blake
          </h1>
          <p className="max-w-[300px]text-center">
            Fastest delivary i had ever experienced...
          </p>
          <p className="flex gap-1">
            <AiTwotoneStar />
            <AiTwotoneStar />
            <AiTwotoneStar />
            <AiTwotoneStar />
            <AiTwotoneStar />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
