import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Sidebar} from "../component/sidebar.jsx";
import { DashHome } from "./DashHome.jsx";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		
		<div className="d-flex">
			<div className="w-auto">
				<Sidebar />
			</div>
			<div className="col">
				<DashHome />
			</div>

		</div>
		
	);
};
