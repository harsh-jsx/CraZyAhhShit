import React from "react";
import { useEffect } from "react";
import { auth, db } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Home = () => {
  const [user, loading, error] = useAuthState(auth);

  return (
    <>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <>
          <div className="container">
            {user ? (
              <>
                <h1>{user.email}</h1>
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
