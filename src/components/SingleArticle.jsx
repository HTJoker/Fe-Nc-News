import { useEffect, useState } from "react";
import { getArticleById, getCommentsById } from "../api";
import { useParams } from "react-router-dom";

export default function SingleArticle() {
	const { article_id } = useParams();

	const [isLoading, setIsLoading] = useState(true);
	const [singleArticle, setSingleArticle] = useState([]);
	const [comments, setComments] = useState([]);

	useEffect(() => {
		setIsLoading(isLoading);
		getArticleById(article_id)
			.then((data) => setSingleArticle(data))
			.then(() => getCommentsById(article_id))
			.then((data) => setComments(data))
			.then(() => setIsLoading(!isLoading));
	}, [article_id]);

	return isLoading ? (
		<section id="loading">
			<h1>Loading{"..."}</h1>
		</section>
	) : (
		<main>
			<section className="articleContainer">
				<h2>{singleArticle.title}</h2>
				<h4>{singleArticle.author}</h4>
				<img src={singleArticle.article_img_url} />
				<p>{singleArticle.body}</p>
			</section>
			<section className="comments">
				<h2 className="subHeaders">Comments</h2>
				<ul className="commentList">
					{comments.map(({ comment_id, body, author, votes }) => {
						return (
							<li key={comment_id}>
								<h3>{author}</h3>
								<p>{body}</p>
								<h4>{votes} Votes</h4>
							</li>
						);
					})}
				</ul>
			</section>
		</main>
	);
}
