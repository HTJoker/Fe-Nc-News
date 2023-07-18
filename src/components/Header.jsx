import { Link } from "react-router-dom";
import Home from "./Home";
import Articles from "./Articles";

export default function Header() {
	return (
		<header className="header">
			<h1>NC News</h1>
			<nav>
				<ul className="navLinks">
					<li>
						<Link to="/" className="links">Home</Link>
					</li>
					<li>
						<Link to="/articles" className="links">Articles</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}
