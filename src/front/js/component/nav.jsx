import React from "react";


export const Nav = ({ Toggle }) => {
    return (
        <nav className=" nav navbar navbar-expand-lg navbar-light bg-transparent sticky-top">
            <div className="container-fluid">

                <a className="navbar-brand" onClick={Toggle} href="#">
                    <i className="fa-solid fa-bars"></i>
                </a>
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src=""/>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton2">
                        <li><a className="dropdown-item active" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><a className="dropdown-item" href="#">Separated link</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};