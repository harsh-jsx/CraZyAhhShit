import React from "react";
import { auth } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

import { db } from "../../firebase";
import { addDoc, collection } from "firebase/firestore";

const Login = () => {
  let navigate = useNavigate();
  const HandleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log(user);
      console.log("USER CREATED!!!!!!");
      await sendEmailVerification(auth.currentUser);
      console.log("Adding user to firestore now");
      const UserCollectionRef = collection(db, "users1");
      const store = await addDoc(UserCollectionRef, {
        UserId: auth.currentUser.uid,
        UserEmail: auth.currentUser.email,
        Username: "",
        VerificationComplete: false,
        Bio: "",
        IsOwner: false,
      })
        .then(() => {
          console.log("Added to db");
          navigate("/");
        })
        .catch((e) => {
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <button
        onClick={() => {
          sendEmailVerification(auth.currentUser);
        }}
      >
        auth emails
      </button>
      <div className="container">
        <h1>Login</h1>
        <form onSubmit={HandleSubmit}>
          <input type="email" name="" id="" />
          <br />
          <input type="password" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Login;
