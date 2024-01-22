// DetailList.js
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const DetailList = ({ bookInfo, listData, setListData }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleDelete = (itemId) => {
    if (!bookInfo) {
      console.error("bookInfo is undefined.");
      return;
    }

    const storedListData =
      JSON.parse(localStorage.getItem(`listData-${bookInfo.isbn}`)) || [];
    const updatedListData = storedListData.filter((item) => item.id !== itemId);
    localStorage.setItem(
      `listData-${bookInfo.isbn}`,
      JSON.stringify(updatedListData)
    );
    setListData(updatedListData);

    // 페이지 새로 고침
    window.location.reload();
  };

  const updateListDataFromLocalStorage = () => {
    const storedListData =
      JSON.parse(localStorage.getItem(`listData-${bookInfo.isbn}`)) || [];
    setListData(storedListData);
  };

  React.useEffect(() => {
    updateListDataFromLocalStorage();
  }, [setListData]);

  return (
    <div>
      <h2>리스트</h2>
      <ul>
        {listData && listData.length > 0 ? (
          listData.map((item) => (
            <li key={item.id}>
              {item.content}
              <button onClick={() => handleDelete(item.id)}>삭제</button>
              <p>{item.date}</p>
            </li>
          ))
        ) : (
          <li>리스트가 비어있습니다.</li>
        )}
      </ul>
    </div>
  );
};

export default DetailList;
