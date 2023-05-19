import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { IoPerson, IoPricetag, IoHome, IoLogOut } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { LogOut, reset } from "../../features/authSlice";
import Modal from "../Modal";
import "./Sidebar.css"

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const [showConfirmation, setShowConfirmation] = useState(false)

  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/");
  };

  return (
    <>
      <div>
        <aside className="menu pl-2 has-shadow pt-2">
          <p className="menu-label is-size-5 has-text-weight-bold">General</p>
          <ul className="menu-list is-size-6">
            <li>
              <NavLink to={"/dashboard"}>
                <a className="nav-item is-tab">
                  <span className="icon" style={{ paddingRight: "3vh" }}><i className="fa fa-home"></i></span> Dashboard
                </a>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/products"}>
                {/* <IoPricetag /> Products */}
                <a className="nav-item is-tab ">
                  <span className="icon" style={{ paddingRight: "3vh" }}><i className="fa fa-tags"></i></span> Products
                </a>
              </NavLink>
            </li>
          </ul>
          {user && user.role === "admin" && (
            <div>
              <p className="menu-label is-size-5 has-text-weight-bold">Admin</p>
              <ul className="menu-list">
                <li>
                  <NavLink to={"/users"}>
                    {/* <IoPerson /> Users */}
                    <a className="nav-item is-tab ">
                      <span className="icon" style={{ paddingRight: "3vh" }}><i className="fa fa-user" ></i></span> Users
                    </a>
                  </NavLink>
                </li>
              </ul>
            </div>
          )}

          <p className="menu-label is-size-5 has-text-weight-bold">Settings</p>
          <ul className="menu-list">
            <li>
              <button onClick={logout} className="button is-white">
                <IoLogOut /> Logout
              </button>
            </li>
          </ul>
        </aside>
      </div>
    </>
  );
};

export default Sidebar;
