import React from "react";
import { useEffect } from "react";
import { auth, db } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  getDoc,
  collection,
  where,
  query,
  onSnapshot,
} from "firebase/firestore";

const Home = () => {
  const [user, loading, error] = useAuthState(auth);

  const userQuery = async () => {
    const UserCollectionRef = collection(db, "users1");
    const q = query(
      UserCollectionRef,
      where("UserEmail", "==", "schwitz6969@gmail.com")
    );
    const unsub = await onSnapshot(q, (querySnapshot) => {
      console.log(querySnapshot);
    });
  };

  useEffect(() => {
    userQuery();
  });

  let lund = undefined;
  return (
    <>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <>
          <div className="container">
            {user ? (
              <>
                {user.emailVerified ? (
                  <h1>{user?.email}</h1>
                ) : (
                  <h1>Please verify your email first.</h1>
                )}
              </>
            ) : (
              <>
                <h1>No user</h1>
                <p>
                  <a href="/login">Please login first </a>
                </p>
              </>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default Home;
