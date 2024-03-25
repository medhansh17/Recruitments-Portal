'use client';

import Button from "@/components/button";
import {firebaseConfig} from "@/firebase.config"
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, User } from "firebase/auth";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function validateEmail(email:string | null) {
  //email must end with vitstudent.ac.in
  if(typeof email === "undefined" || email === null) return false;
  if (email.endsWith("@vitstudent.ac.in")) {
    return true;
  } else {
    return false;
  }
}


export default function Login() {
  const router = useRouter();

  useEffect(() => {
    // Check if the router is available
    if (!router) return;

    // Your router-related logic here
  }, [router]);


  function verifyEmailinDB(user:User){
      axios.post('https://recruitments-portal-backend.vercel.app/check_user', {
        email: user.email
      }).then((response) => {
        if(response.status === 200){
          //create cookie of user email and response.data.accessToken
          document.cookie = `email=${user.email}; path=/`
          document.cookie = `accessToken=${response.data.accessToken}; path=/`
          router.push("/")
          
      }
      else{
        alert("Email not registered for IEEE-CS")
      }
    })
      .catch((error) => {
        alert(error.message)
      })
  }



  function handleLogin(){
    const app = initializeApp(firebaseConfig);
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters(
      {
        hd: "vitstudent.ac.in",
        prompt: "select_account"
      }
    )
    const auth = getAuth(app);
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential:any = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        if(!validateEmail(user.email)){
          alert("Please login with your VIT email")
          signOut(auth);
        }

        verifyEmailinDB(user);

      }).catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage)
      });

  }
  return (
    <div className="w-screen  h-screen md:h-screen flex flex-col items-center justify-center">
      <div className="w-[80vw] md:w-screen flex flex-col items-center justify-between">
        <img
          src={"/login-splash.svg"}
          alt="Login splash"
          width={800}
          height={800}
          loading="lazy"
          style={{
            marginBottom: "10vh",
          }}
        />
        <Button text="Sign in with Google" onClick={handleLogin} />
      </div>
    </div>
  );
}
