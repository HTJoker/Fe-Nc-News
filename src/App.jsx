import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Articles from "./components/Articles";
import Home from "./components/Home";
import SingleArticle from "./components/SingleArticle";

function App() {
	const [loading, setLoading] = useState(true);
	return (
		<div>
			<Header />
			<Routes>
				<Route
					path="/"
					element={<Home loading={loading} setLoading={setLoading} />}
				></Route>
				<Route
					path="/articles"
					element={<Articles loading={loading} setLoading={setLoading} />}
				></Route>
				<Route
					path="/articles/:article_id"
					element={<SingleArticle loading={loading} setLoading={setLoading} />}
				></Route>
			</Routes>
		</div>
	);
}

export default App;
