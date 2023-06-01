import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { useState } from "react";
const GoToTop = () => {
  let mybutton = document.getElementById("myBtn");
  const [visible, setvisible] = useState(false);
  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = () => {
    scrollFunction();
  };

  const scrollFunction = () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      // mybutton.style.display = "block";
      // bl = true;
      setvisible(true);
    } else {
      // mybutton.style.display = "none";
      // bl = false;
      setvisible(false);
    }
  };

  // When the user clicks on the button, scroll to the top of the document
  const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  return (
    <>
      {/* return to top button starts */}
      <button
        className={visible ? "block" : "hidden"}
        onClick={topFunction}
        id="myBtn"
        title="Go to top"
      >
        <BsFillArrowUpCircleFill />
      </button>
      {/* return to top button ends */}
    </>
  );
};

export default GoToTop;
