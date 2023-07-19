import axios from "axios";

const myApi = axios.create({
	baseURL: "https://hersh-news-api.onrender.com/api",
});

export const getArticles = async () => {
	const { data } = await myApi.get("/articles");
	return data.articles;
};

export const getArticleById = async (article_id) => {
	const { data } = await myApi.get(`/articles/${article_id}`);
	return data.article;
};

export const getCommentsById = async (article_id) => {
	const { data } = await myApi.get(`/articles/${article_id}/comments`);
	return data.comments;
};

export const updateArticleVote = (article_id) => {
	const { data } = myApi.patch(`/articles/${article_id}`, {votes:0});
	return data.article.votes
};
