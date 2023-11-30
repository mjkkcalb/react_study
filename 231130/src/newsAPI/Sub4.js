import axios from "axios";
import { useEffect, useState } from "react";

const Sub4 = () => {
  const API_KEY = "9755801d50bf4bf2885520c58a271172";
  const URL = `https://newsapi.org/v2/top-headlines?country=kr&category=science&apiKey=${API_KEY}`;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(URL);
        console.log(res.data.articles);
        setData(res.data.articles);
        setError(null);
      } catch (error) {
        console.log(error);
        setError("데이터를 불러오는 중 에러가 발생");
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  if (loading) return <h2>로딩중....</h2>;
  if (error) return <h2>데이터를 불러올 수 없습니다</h2>;

  return (
    <ul
      style={{
        listStyle: "none",
        width: "80%",
        margin: "auto",
        paddingTop: 50,
      }}>
      {data.map((news) => (
        <li key={news.publishedAt} style={{ marginBottom: 20 }}>
          <a
            href={news.url}
            target="_blank"
            style={{ color: "black", display: "flex", textDecoration: "none" }}>
            <img
              src={news.urlToImage}
              alt={news.title}
              style={{
                width: 250,
                height: 150,
                objectFit: "cover",
                overflow: "hidden",
              }}
            />
            <div style={{ marginLeft: 30, width: "80%" }}>
              <h3 style={{ textDecoration: "underline" }}>{news.title}</h3>
              <p>{news.description}</p>
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Sub4;
