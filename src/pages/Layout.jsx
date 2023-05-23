import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="columns mt-6" style={{ minHeight: "94vh" }}>
        <div className="column is-2">
          <Sidebar />
        </div>
        <div className="column is-desktop has-background-grey-light is-large pr-5 mt-2">
          <div style={{
            margin : "0",
            width : "100%",
            height : "100%"
          }} className="has-background-light p-3">
          <main>{children}</main>

          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Layout;
