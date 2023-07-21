import { useState, useEffect } from "react";
import { updateArticleVotes } from "../api";

export default function VoteBtn({ article_id, votes }) {
	const [voteCount, setVoteCount] = useState(votes);
	const [isClicked, setUpClicked] = useState(false);

	useEffect(() => {
		setUpClicked(isClicked);
	}, []);

	const handleUpVotes = (vote) => {
		if (!isClicked) {
			setVoteCount(voteCount + vote);
			setUpClicked(true);
			updateArticleVotes(article_id, vote).catch((error) => {
				console.log(error);
				setVoteCount(voteCount);
				alert("Something went wrong. Please try again later.");
				setUpClicked(false);
			});
		}
	};

	const handleDownVotes = (vote) => {
		if (!isClicked) {
			setVoteCount(voteCount - vote);
			setUpClicked(true);
			updateArticleVotes(article_id, -vote).catch((error) => {
				console.log(error);
				setVoteCount(voteCount);
				alert("Something went wrong. Please try again later.");
				setUpClicked(false);
			});
		}
	};

	return (
		<div className="voting">
			<button className="voteUpBtn" onClick={() => handleUpVotes(1)
			}>
				UpVote
			</button>
			<button className="voteDownBtn" onClick={() => handleDownVotes(1)}>
				DownVotes
			</button>
			<h3>{voteCount} Votes</h3>
		</div>
	);
}
