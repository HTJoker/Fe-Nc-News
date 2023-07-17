import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Articles from "./components/Articles";

function App() {
	return (
		<div>
			<Header />
			<Articles />
		</div>
	);
}

export default App;
