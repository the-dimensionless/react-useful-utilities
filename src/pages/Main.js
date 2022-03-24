import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const MainComponent = () => {
  const activeStyle = {
    color: "white",
  };

  return (
    <div className="App">
      <h1 className="header">React Useful Utilites</h1>
      <nav>
        <NavLink
          className="link"
          to="/throttling"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Throttling Demo
        </NavLink>
        <NavLink
          className="link"
          to="/debounce"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Debounce Demo
        </NavLink>
        {/*   <Link   className='link' to="">Link 3</Link>
      <Link  className='link' to="">Link 4</Link> */}
      </nav>
      <Outlet />
    </div>
  );
};

export default MainComponent;
