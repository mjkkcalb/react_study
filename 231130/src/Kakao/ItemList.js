import { useEffect, useState } from "react";
import axios from "axios";

const ItemList = ({ category }) => {
  const [loading, setLoading] = useState(true);
  const [itemsArticle, setItemsArticle] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const URL = "https://dapi.kakao.com/v3/search/book";
        const query = category === "한강" ? "" : `?query=${category}`;
        const APPKEY = "KakaoAK a1af021d5b1faa4b101cdea827a269bb";

        const res = await axios.get(`${URL}${query}`, {
          headers: {
            Authorization: APPKEY,
          },
        });

        setItemsArticle(res.data.documents);
      } catch (err) {
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [category]);

  if (loading) {
    return <h2>불러오는 중......</h2>;
  }

  return (
    <div>
      <ul>
        {itemsArticle.map((item) => (
          <li key={item.isbn}>
            <strong>{item.authors}</strong> {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
