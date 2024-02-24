import React from "react";
import { MdOutlineDashboard, MdDashboard, MdReport } from "react-icons/md";
import { FaRegImages } from "react-icons/fa";
import { PiUsersThreeFill } from "react-icons/pi";
import { IoSettings } from "react-icons/io5";
import profileImage from "./keshab.png";
import { CiLogout } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import { IoMdOptions } from "react-icons/io";

const SideNavbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark sidenavbar">
      <a class="navbar-brand sidenavbarMainHeading" href="#">
        Admin Dashboard
      </a>
      <img src={profileImage} alt="" srcset="" className="profileImage" />
      <h5 class="textchota navbar-brand">Keshab Das || Web Developer</h5>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse siderbaroptionall" id="navbarNav">
        <div class="navbar-nav flex-column siderbaroption">
          <NavLink to="/" className="siderbaroption1s">
            <MdDashboard className="sidebaricons" />
            Dashboard <span class="sr-only">(current)</span>
          </NavLink>
          <NavLink to="/features" className="siderbaroption1s">
            <IoMdOptions className="sidebaricons" />
            Features
          </NavLink>

          <NavLink to="/images" className="siderbaroption1s">
            <FaRegImages className="sidebaricons" />
            Images
          </NavLink>

          <NavLink to="category" className="siderbaroption1s">
            <MdOutlineDashboard className="sidebaricons" />
            Category
          </NavLink>

          <NavLink to="customers" className="siderbaroption1s">
            <PiUsersThreeFill className="sidebaricons" />
            Customers
          </NavLink>

          <NavLink to="reports" className="siderbaroption1s">
            <MdReport className="sidebaricons" />
            Reports
          </NavLink>

          <NavLink to="settings" className="siderbaroption1s">
            <IoSettings className="sidebaricons" />
            Settings
          </NavLink>

          <NavLink to="" className="siderbaroption1s">
            <CiLogout className="sidebaricons" />
            Logout
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default SideNavbar;
