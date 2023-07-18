import axios from "axios";

const myApi = axios.create({
	baseURL: "https://hersh-news-api.onrender.com/api",
});

export const getArticles = async () => {
	const { data } = await myApi.get("/articles");
	return data.articles;
};

