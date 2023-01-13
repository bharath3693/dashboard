import React from "react";
import { Clock } from "./smallComponents/Clock";


export const Navbar = () => {

  return (
    <nav className="navbar navbar-expand-lg navbar-bg p-1 block m-0 shadow-max" >
      <div className="container-fluid p-1">
        <div className="navbar-brand text-white border-right border-info row">
          <div className="col">
          <h5 className="d-flex justify-content-start roboto">
            <img className="mx-1" alt='logoman' src="https://img.icons8.com/external-vitaliy-gorbachev-flat-vitaly-gorbachev/512/external-dashboard-blogger-vitaliy-gorbachev-flat-vitaly-gorbachev.png" height={30} widht={30} />
            <div className="mt-1">INTELLIGENT EDGE</div>
          </h5>
          </div>
          <div className="col">
            <Clock />
          </div>
        </div>

        <button className="btn btn-sm bg-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-right" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z" />
            <path fillRule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
          </svg>
          logout
        </button>

      </div>
    </nav>

  );
};