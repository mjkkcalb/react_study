import axios from "axios";
import React, { useEffect, useState } from "react";

const Async2 = () => {
  const URL = "https://jsonplaceholder.typicode.com/posts";

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  useEffect(() => {
    axios
      .get(URL)
      .then((res) => {
        //응답 성공으로 실행
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setData([]);
        setLoading(true); // 원래는 false 인데 로딩중 체크하려면 true
        setErr("오류");
      });
  }, []);

  return (
    <>
      {loading ? (
        <h3>로딩중 ...</h3>
      ) : (
        <ol>
          {data.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ol>
      )}
      <h3 style={{ color: "red" }}>{err && err}</h3>
    </>
  );
};

export default Async2;
