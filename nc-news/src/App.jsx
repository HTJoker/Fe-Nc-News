import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Articles from "./components/Articles";
import Home from "./components/Home";

function App() {
	return (
		<div>
			<Header />
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/articles" element={<Articles />}></Route>
			</Routes>
		</div>
	);
}

export default App;
