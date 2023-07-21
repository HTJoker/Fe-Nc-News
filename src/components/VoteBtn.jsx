import { useState, useEffect } from "react";
import { updateArticleVotes } from "../api";

export default function VoteBtn({ article_id, votes }) {
	const [voteCount, setVoteCount] = useState(votes);
	const [isClicked, setIsClicked] = useState(null);

	useEffect(() => {
		setIsClicked(isClicked);
	}, []);

	const addVote = () => {
		setIsClicked(true);
		setVoteCount((currCount) => currCount + 1);
		updateArticleVotes(article_id, 1).then(({ votes }) => setVoteCount(votes));
	};

	const subtractVote = () => {
		setIsClicked(!isClicked);
		setVoteCount((currCount) => currCount - 1);
		updateArticleVotes(article_id, -1).then(({ votes }) => setVoteCount(votes));
	};

	return (
		<section className="voting">
			<button
				className="voteUpBtn"
				onClick={isClicked ? subtractVote : addVote}
			>
				{isClicked ? "Liked" : "Like"}
			</button>
			<h3>{voteCount} Votes</h3>
		</section>
	);
}
