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
      <Head>
        <title>Venaz Portfolio</title>
        <link rel="icon" href="/favicon.png" />
        <meta
          property="og:image"
          content="https://techietainment.io/wp-content/uploads/2021/02/State-of-cryptocurrencies-in-Nigeria.jpg"
        ></meta>
      </Head>
      <Nav page={page} loading={toogleLoading} />
      <div className="children">{children}</div>
    </div>
  );
};

export default Layout;
