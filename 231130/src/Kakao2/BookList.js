import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BookList = () => {
  const { title } = useParams();
  const [loading, setLoading] = useState(false);
  const [book, setBook] = useState([]);
  const kakaoData = useCallback(async () => {
    try {
      setLoading(true);
      const URL = `https://dapi.kakao.com/v3/search/book?target=title&query=${title}&page=${page}`;

      cont;
      const header = {
        Authorization: `"KakaoAK ${API_KEY}`,
      };
    } catch (err) {
      console.log("오류", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    kakaoData;
  }, []);

  return (
    <div>
      <h2>list</h2>
    </div>
  );
};

export default BookList;
