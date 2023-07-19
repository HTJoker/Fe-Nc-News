import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCommentsById } from "../api";

export default function Comments() {
	const { article_id } = useParams();

	const [comments, setComments] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setIsLoading(isLoading);
		getCommentsById(article_id)
			.then((data) => {
				setComments(data);
			})
			.then(() => setIsLoading(!isLoading));
	}, []);

	console.log(comments[0]);

	return isLoading ? (
		<section id="loading">
			<h1>Loading{"..."}</h1>
		</section>
	) : (
		<div>
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
		</div>
	);
}
