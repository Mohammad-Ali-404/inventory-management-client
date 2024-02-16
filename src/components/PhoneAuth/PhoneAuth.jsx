import { useEffect } from "react";
import firebase from "firebase/compat/app";

const PhoneAuth = () => {
  useEffect(() => {
    // Load FirebaseUI script dynamically
    const script = document.createElement("script");
    script.src = "https://www.gstatic.com/firebasejs/ui/4.8.0/firebase-ui-auth.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      // Initialize FirebaseUI instance
      const ui = new firebaseui.auth.AuthUI(firebase.auth());
      
      // Start FirebaseUI phone auth
      ui.start("#firebaseui-auth-container", {
        signInSuccessUrl: "http://localhost:5173/",
        signInOptions: [
          {
            provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
            recaptchaParameters: {
              type: "image", // 'audio'
              size: "normal", // 'invisible' or 'compact'
              badge: "bottomleft", //' bottomright' or 'inline' applies to invisible.
            },
          },
          {
            provider: firebase.auth.GithubAuthProvider.PROVIDER_ID,
          },
        ],
        tosUrl: "https://google.com",
        privacyPolicyUrl: "https://google.com",
      });
    };
  }, []);

  return <div className="card" id="firebaseui-auth-container"></div>;
};

export default PhoneAuth;
