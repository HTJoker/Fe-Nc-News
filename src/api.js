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

export const upVoteRequest = async (article_id) => {
	const { data } = await myApi.patch(`/articles/${article_id}`, {
		inc_votes: 1,
	});
	return data.article;
};

export const downVoteRequest = async (article_id) => {
	const { data } = await myApi.patch(`/articles/${article_id}`, {
		inc_votes: -1,
	});
	return data.article;
};
