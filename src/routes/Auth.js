import React from "react";
import AuthForm from "components/AuthForm";
import { authService, firebaseInstance } from "myBase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faGoogle,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Auth = () => {
  const onSocialClick = async (event) => {
    const {
      target: { name },
    } = event;
    let provider;
    if (name === "google") {
      provider = new firebaseInstance.auth.GoogleAuthProvider();
    } else if (name === "github") {
      provider = new firebaseInstance.auth.GithubAuthProvider();
    }
    const data = await authService.signInWithPopup(provider);
    console.log(data);
  };
  return (
    <div className="authContainer">
      <FontAwesomeIcon
        icon={faTwitter}
        color={"#04AAFF"}
        size="3x"
        style={{ marginBottom: 30 }}
      />
      <AuthForm />
      <div className="authBtns">
        <button name="google" onClick={onSocialClick} className="authBtn">
          구글 계정 이용 <FontAwesomeIcon icon={faGoogle} />
        </button>
        <button name="github" onClick={onSocialClick} className="authBtn">
          깃허브 계정 이용 <FontAwesomeIcon icon={faGithub} />
        </button>
      </div>
    </div>
  );
};

export default Auth;
