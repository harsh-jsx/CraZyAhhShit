import React from "react";

const UserPage = () => {
  const params = window.location.pathname;
  const params1 = params.slice(1);
  console.log(params);

  return <div>User - {params1}</div>;
};

export default UserPage;
