import { useEffect, useState } from "react";
import { getArticleById } from "../api";
import { useParams } from "react-router-dom";

export default function SingleArticle({ loading, setLoading }) {
	const { article_id } = useParams();

	const [singleArticle, setSingleArticle] = useState([]);

	useEffect(() => {
		setLoading(true);
		getArticleById(article_id)
			.then((data) => {
				setSingleArticle(data);
			})
			.then(() => {
				setLoading(false);
			});
	}, [article_id]);

	return loading ? (
		<section id="loading">
			<h1>Loading{"..."}</h1>
		</section>
	) : (
		<main className="articleContainer">
			<h2>{singleArticle.title}</h2>
			<h4>{singleArticle.author}</h4>
			<img src={singleArticle.article_img_url} alt="" />
			<p>{singleArticle.body}</p>
		</main>
	);
}
