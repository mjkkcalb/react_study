import axios from "axios";
import React, { useEffect, useState } from "react";

const Async3 = () => {
  const URL = "https://jsonplaceholder.typicode.com/post";

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);
  //undefined는 내가 찾지 못한 오류 null은 내 의지에 의해 없다 라는 의미를 가진다
  /*
  useEffect(() => {
    axios
      .get(URL)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setData([]);
        setLoading(false);
        setErr("ERROR");
      });
  }, []);
*/

  useEffect(() => {
    const getData = async () => {
      try {
        //응답 성공
        const res = await axios.get(URL);
        setData(res.data);
        //setLoading(false);
        setErr(null);
      } catch (err) {
        //응답 실패
        setErr(err);
        // setLoading(false);
      }
      setLoading(false);
    };

    getData();
  }, []);

  if (loading) return <h3>로딩중 ...</h3>;
  if (err) return <h3>오류입니다.</h3>;
  if (!data || data.length === 0) return <h3>데이터가 없습니다.</h3>;

  return (
    <ol>
      {data.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ol>
  );
};

export default Async3;
