import { useState, useEffect } from "react";
import { updateArticleVotes } from "../api";

export default function VoteBtn({ article_id, votes }) {
	const [voteCount, setVoteCount] = useState(votes);
	const [isClicked, setUpClicked] = useState(false);

	useEffect(() => {
		setUpClicked(isClicked);
	}, []);

	const handleVotes = (vote) => {
		if (!isClicked) {
			setVoteCount(voteCount + vote);
			setUpClicked(true);
			updateArticleVotes(article_id, vote).catch((error) => {
				console.log(error);
				setVoteCount(voteCount);
				alert("Something went wrong. Please try again later.");
				setUpClicked(false);
			});
		} else {
			setVoteCount(voteCount - vote);
			setUpClicked(false);
			updateArticleVotes(article_id, vote).catch((error) => {
				console.log(error);
				setVoteCount(voteCount);
				alert("Something went wrong. Please try again later.");
				setUpClicked(true);
			});
		}
	};

	return (
		<div className="voting">
			<button
				className="voteUpBtn"
				onClick={() => handleVotes(1)}
			>
				UpVote
			</button>
			<button
				className="voteDownBtn"
				onClick={() => handleVotes(-1)}
			>
				DownVotes
			</button>
			<h3>{voteCount} Votes</h3>
		</div>
	);
}
