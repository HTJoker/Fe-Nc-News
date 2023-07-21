import { useState, useEffect } from "react";
import { updateArticleVotes } from "../api";

export default function VoteBtn({ article_id, votes }) {
	const [voteCount, setVoteCount] = useState(votes);
	const [isClicked, setIsClicked] = useState(false);

	useEffect(() => {
		setIsClicked(isClicked);
	}, []);

	const handleUpVotes = () => {
		if (!isClicked) {
			setVoteCount(voteCount + 1);
			setIsClicked(true);
			updateArticleVotes(article_id, 1).catch((error) => {
				console.log(error);
				setVoteCount(voteCount);
				alert("Something went wrong. Please try again later.");
				setIsClicked(false);
			});
		}
	};

	const handleDownVotes = () => {
		if (!isClicked) {
			setVoteCount(voteCount - 1);
			setIsClicked(true);
			updateArticleVotes(article_id, -1).catch((error) => {
				console.log(error);
				setVoteCount(voteCount);
				alert("Something went wrong. Please try again later.");
				setIsClicked(false);
			});
		}
	};

	return (
		<div className="voting">
			<button
				className="voteUpBtn"
				onClick={handleUpVotes}
				disabled={isClicked ? true : false}
			>
				{"Vote up"}
			</button>
			<button
				className="voteDownBtn"
				onClick={handleDownVotes}
				disabled={isClicked ? true : false}
			>
				DownVotes
			</button>
			<h3>{voteCount} Votes</h3>
		</div>
	);
}
