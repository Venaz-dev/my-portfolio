import React, { useState } from "react";
import Nav from "./nav/Nav";
import Loader from "./loader/loader";
import Head from "next/head";

const Layout = ({ page, children }) => {
  const [loading, setLoading] = useState(false);

  const toogleLoading = () => {
    console.log("works");
    setLoading(!loading);
    setTimeout(() => {
      setLoading(!loading);
    }, 2000);
  };
  return (
    <div>
      <Nav page={page} loading={toogleLoading} />
      <div className="children">{children}</div>
    </div>
  );
};

export default Layout;
