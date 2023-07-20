import { useState, useEffect } from "react";
import { upVoteRequest, downVoteRequest } from "../api";

export default function VoteBtn({ article_id, votes }) {
	const [voteIncrement, setVoteIncrement] = useState(0);
	const [isUpClicked, setIsUpClicked] = useState(false);
	const [isDownClicked, setIsDownClicked] = useState(false);

	const handUpVote = () => {
		upVoteRequest(article_id)
			.then((res) => setVoteIncrement(res))
			.then(() => setIsUpClicked(true))
			.then(() => setIsDownClicked(false));
	};

	const handleDownVote = () => {
		downVoteRequest(article_id)
			.then((res) =>
				voteIncrement < 1 ? setVoteIncrement(0) : setVoteIncrement(res)
			)
			.then(() => setIsDownClicked(true))
			.then(() => setIsUpClicked(false));
	};

	return (
		<section className="voting">
			<button disabled={isUpClicked} className="voteUpBtn" onClick={handUpVote}>
				Up Vote
			</button>
			<button
				disabled={isDownClicked}
				className="voteDownBtn"
				onClick={handleDownVote}
			>
				Down Vote
			</button>
			<h3>{voteIncrement.votes > 0 ? voteIncrement.votes : "0"} Votes</h3>
		</section>
	);
}
