import { useState, useEffect } from "react";
import { updateArticleVotes} from "../api";

export default function VoteBtn({ article_id, votes }) {
	const [voteIncrement, setVoteIncrement] = useState(0);


	useEffect(() => setVoteIncrement(votes), []);

	const handleVotes = () => {
    updateArticleVotes(article_id, 1)
    .then(({votes}) => setVoteIncrement(votes))
	};

	return (
		<section className="voting">
			<button className="voteUpBtn" onClick={handleVotes}>
				Up Vote
			</button>
			{/* <button
				disabled={isDownClicked}
				className="voteDownBtn"
				onClick={handleDownVote}
			>
				Down Vote
			</button> */}
			<h3>{voteIncrement} Votes</h3>
		</section>
	);
}
