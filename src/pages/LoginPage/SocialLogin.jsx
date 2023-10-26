import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import googleLogo from "../../assets/googleLogo.png"
import githubLogo from "../../assets/GitHub-Mark.png"
const SocialLogin = () => {
  const { signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    signInWithGoogle().then((result) => {
      const loggedInUser = result.user;
      console.log(loggedInUser);
      // const saveUser = {
      //   name: loggedInUser.displayName,
      //   email: loggedInUser.email,
      // };
      // fetch("http://localhost:5000/users", {
      //   method: "POST",
      //   headers: {
      //     "content-type": "application/json",
      //   },
      //   body: JSON.stringify(saveUser),
      // })
        // .then((res) => res.json())
        // .then(() => {
        //   navigate(from, { replace: true });
      // });
      navigate("/")
    });
  };

  return (
    <div className="w-full text-center my-4">
      <button
        onClick={handleGoogleSignIn}
        className="flex mx-auto w-full gap-4 items-center justify-center bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
      >
        <img src={googleLogo} alt="google-logo" className="w-6 rounded-full" />
        <span>Sign with Google</span>
      </button>
      <button
        onClick={handleGoogleSignIn}
        className="flex mx-auto w-full mt-2 gap-4 items-center justify-center bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
      >
        <img src={githubLogo} alt="github-logo" className="w-6 rounded-full" />
        <span>Sign with Github</span>
      </button>
    </div>
  );
};

export default SocialLogin;
