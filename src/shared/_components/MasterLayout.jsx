import React from "react";
import Footer from "./Footer";
import TopNav from "./TopNav";

export default function MasterLayout(props) {
  return (
    <div className="border p-3 m-3">
      <TopNav />
      {props.children}
      <Footer />
    </div>
  );
}
