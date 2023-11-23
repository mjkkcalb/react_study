import axios from "axios";
import React, { useEffect, useState } from "react";

const Async4 = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);
  const API_KEY = "9755801d50bf4bf2885520c58a271172";
  const URL = `https://newsapi.org/v2/top-headlines?country=kr&apiKey=${API_KEY}`;

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(URL);
        setData(res.data.articles);
        //console.log(res.data);
        setErr(null);
      } catch (error) {
        //console.error(error);
        setErr("데이터를 불러오는 중 에러가 발생");
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  if (loading) return <h3>로딩중 ...</h3>;
  if (err) return <h3>오류입니다.</h3>;

  return (
    <>
      <ul>
        {data.map((news) => (
          <li key={news.publishedAt}>
            <a href={news.url} target="_blank">
              <img
                src={news.urlToImage}
                alt={news.title}
                style={{ width: 200 }}
              />
              <h3>{news.title}</h3>
              <p>{news.description}</p>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Async4;
