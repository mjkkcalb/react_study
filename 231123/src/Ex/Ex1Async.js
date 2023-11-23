import axios from "axios";
import { useEffect, useState } from "react";

const Ex1Async = () => {
  const [id, setId] = useState(null);
  const [post, setPost] = useState({});
  const [error, setError] = useState(null);
  const URL = `https://jsonplaceholder.typicode.com/posts/${id}`;

  const getData = async () => {
    try {
      const res = await axios.get(URL);
      setPost(res.data);
      setError(null);
    } catch (error) {
      console.log(error);
      setError("오류입니다.");
    }
  };

  useEffect(() => {
    if (!isNaN(id)) getData(); //방법1
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    !isNaN(id) ? getData() : alert("숫자만 입력하세요"); //방법2
  };

  const chageInput = (e) => {
    const { value } = e.target;
    setId(value);
  };

  return (
    <>
      {/* 검색 창에 아이디 넘버를 입력하면 해당 아이디를 가진 title 출력 */}
      <form onSubmit={handleSubmit}>
        <input type="search" value={id} onChange={chageInput} />
        <button type="submit">검색</button>
      </form>
      <hr />
      <h3>
        {post.id} : {post.title}
      </h3>
    </>
  );
};

export default Ex1Async;
