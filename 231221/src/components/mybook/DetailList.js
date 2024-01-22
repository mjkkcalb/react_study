// DetailList.js
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import MyBookStyle from "./mybook.module.css";
import { BiXCircle } from "react-icons/bi";

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
    <div className={MyBookStyle.DetailList}>
      <h2 className={MyBookStyle.DetailListTitle}>&lt; memo &gt;</h2>
      <ul className={MyBookStyle.DetailListMenu}>
        {listData && listData.length > 0 ? (
          listData.map((item) => (
            <li key={item.id} className={MyBookStyle.DetailListItem}>
              {item.content}
              <div className={MyBookStyle.DetailListItemSub}>
              <p className={MyBookStyle.DetailListDate}>{item.date}</p>
              <button onClick={() => handleDelete(item.id)} className={MyBookStyle.DetailListDel}><BiXCircle /></button>
              </div>
            </li>
          ))
        ) : (
          <li className={MyBookStyle.DetailListNot}>리스트가 비어있습니다.</li>
        )}
      </ul>
    </div>
  );
};

export default DetailList;
