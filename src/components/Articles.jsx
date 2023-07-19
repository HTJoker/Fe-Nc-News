import React, { useEffect, useState } from "react";
import { getArticles } from "../api";
import { Link } from "react-router-dom";

export default function Articles() {
	const [articles, setArticles] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(loading);
		getArticles()
			.then((res) => {
				setArticles(res);
			})
			.then(() => {
				setLoading(!loading);
			});
	}, []);

	return loading ? (
		<section id="loading">
			<h1>Loading{"..."}</h1>
		</section>
	) : (
		<main>
			<h2 className="subHeaders">Articles</h2>
			<ul className="articleList">
				{articles.map(({ title, article_id, author, article_img_url }) => {
					return (
						<Link to={`/articles/${article_id}`} key={article_id}>
							<li className="article">
								<img src={article_img_url} />
								<h3>{title}</h3>
								<p>
									<em>By {author}</em>
								</p>
							</li>
						</Link>
					);
				})}
			</ul>
		</main>
	);
}
