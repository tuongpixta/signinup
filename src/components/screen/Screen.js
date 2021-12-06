import React, { useState } from "react";
import Signin from "../signin/Signin";
import Signup from "../signup/Signup";
function Screen(props) {
  const [isSignup, setIsSignup] = useState(false);
  const btnText = ["Sign up", "Sign in"];
  const handleButtonClick = () => {
    setIsSignup(!isSignup);
  };

  const onLoggedIn = () => {
    props.onLoggedIn();
  };

  return (
    <div className=" max-w-xl mx-auto p-5">
      <button
        className="bg-pink-500 p-2 rounded text-white mb-3"
        onClick={handleButtonClick}
      >
        Change to {btnText[isSignup ? 1 : 0]}
      </button>
      {isSignup ? (
        <Signup onLoggedIn={onLoggedIn} />
      ) : (
        <Signin onLoggedIn={onLoggedIn} />
      )}
    </div>
  );
}
export default Screen;
