import { useEffect, useState } from "react";
import { getArticleById } from "../api";
import { useParams } from "react-router-dom";

export default function SingleArticle() {
	const { article_id } = useParams();

	const [isLoading, setIsLoading] = useState(true);
	const [singleArticle, setSingleArticle] = useState([]);

	useEffect(() => {
		setIsLoading(true);
		getArticleById(article_id)
			.then((data) => {
				setSingleArticle(data);
			})
			.then(() => {
				setIsLoading(false);
			});
	}, [article_id]);

	return isLoading ? (
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
