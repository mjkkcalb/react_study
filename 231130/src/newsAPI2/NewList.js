import { useEffect, useState } from "react";
import axios from "axios";
import NewsItem from "./NewsItem";

const NewsList = ({ category }) => {
  const [loading, setLoading] = useState(true);
  const [newsArticle, setNewsArticle] = useState([]);

  useEffect(() => {
    const newData = async () => {
      try {
        const URL = "https://newsapi.org/v2/top-headlines?country=kr";
        const query = category === "all" ? "" : "&category=" + category;
        const APPKEY = "&apiKey=cbe12703fb7a4488ac454422cfb9d3e9";

        const res = await axios.get(URL + query + APPKEY);
        console.log(res.data.articles);
        setNewsArticle(res.data.articles);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    newData();
  }, [category]);

  if (loading) {
    return <h2>불러오는 중......</h2>;
  }

  return (
    <div>
      {newsArticle.map((news) => (
        <NewsItem key={news.publishedAt} news={news} />
      ))}
    </div>
  );
};

export default NewsList;
