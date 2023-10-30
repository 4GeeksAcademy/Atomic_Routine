import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Sidebar} from "../component/sidebar.jsx";
import { DashHome } from "./DashHome.jsx";
import { Nav } from "../component/nav.jsx";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const [toggle, setToggle] =useState(false); 
	function Toggle() {
		setToggle(!toggle)
	}

	return (
		
		<div className="d-flex">
			<div className={toggle ? "d-none" : "w-auto position-fixed"}>
				<Sidebar />
			</div>
			<div className={toggle ? "d-none" : "invisible"}>
				<Sidebar />
			</div>
			<div className="col overflow-auto">
				<Nav Toggle={Toggle}/>
				<DashHome />
			</div>

		</div>
		
	);
};
