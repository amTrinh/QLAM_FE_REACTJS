import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";

export default function SidebarItem({ item }) {
  const [open, setOpen] = useState(false);
  function isLibrary(path) {
    if (path === "/library?type=song") {
      if (window.location.pathname === "/library") {
        return 1;
      } else return 0;
    } else if (path === "/recently?type=song") {
      if (window.location.pathname === "/recently") {
        return 1;
      } else return 0;
    } else {
      if (window.location.pathname === path) {
        return 1;
      } else return 0;
    }
  }

  if (item.subNav) {
    return (
      <div
        className={open ? "sidebar-item open" : "sidebar-item"}
        id={
          window.location.pathname === item.path && open === false
            ? "active"
            : "inactive"
        }
      >
        <div className="sidebar-title">
          <span
            onClick={() => {
              window.location.pathname = item.path;
            }}
          >
            <Link
              className="sidebar-link"
              to={item.path}
              style={{ textDecoration: `none`, color: `black` }}
            >
              {item.icon}
              {item.title}
            </Link>
          </span>
          <i
            className="toogle-button"
            style={{ cursor: `pointer` }}
            onClick={() => setOpen(!open)}
          >
            {!open ? item.iconOpened : item.iconClosed}
          </i>
        </div>
        <div className="sidebar-content">
          {item.subNav.map((child, index) => (
            <SidebarItem key={index} item={child} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <a
        href={item.path || "#"}
        className="sidebar-item plain"
        id={isLibrary(item.path) ? "active" : "inactive"}
      >
        <span>
          {item.icon}
          {item.title}
        </span>
      </a>
    );
  }
}