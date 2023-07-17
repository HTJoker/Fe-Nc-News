import React, { useEffect, useState } from "react";
import { getArticles } from "../api";

export default function Articles() {
	const [articles, setArticles] = useState([]);
	useEffect(() => {
		getArticles().then((res) => {
			setArticles(res);
		});
	}, []);

	return (
		<div>
			<h2>Articles</h2>
			<ul className="articleList">
				{articles.map(({ title, article_id, author, article_img_url }) => {
					return (
						<li className="article" key={article_id}>
							<h3>{title}</h3>
							<img src={article_img_url} />
							<p>{author}</p>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
