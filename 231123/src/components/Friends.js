import React, { useCallback, useRef, useState } from "react";
import FriendsList from "./FriendsList";
import FriendsBtn from "./FriendsBtn";
import dataList from "../assets/DB/CatData";
import FriendsAdd from "./FriendsAdd";

const Friends = () => {
  const [data, setData] = useState(dataList);
  const [isChk, setIsChk] = useState(false);
  const no = useRef(dataList.length + 1);

  // 체크박스
  const changeInput = useCallback((e) => {
    const { checked } = e.target;
    setIsChk(checked);
  }, []);
  // 추가
  const onAdd = useCallback(
    (form) => {
      form.id = no.current++;
      setData([...data, form]);
    },
    [data]
  );

  // 삭제
  const onDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  // 모두 삭제
  const onRemove = useCallback(() => {
    setData([]); // 빈 배열을 반환하면 모두 삭제
  }, []);

  // 모두 복구
  const onReset = useCallback(() => {
    setData(dataList); // 초기 리스트 배열을 반환하면 모두 복구
  }, []);

  return (
    <div>
      <h2>고양이 친구들 : {data.length}마리</h2>

      <FriendsList data={data} onDelete={onDelete} />
      <FriendsBtn onRemove={onRemove} onReset={onReset} />

      <label htmlFor="chk">
        <input
          type="checkbox"
          id="chk"
          checked={isChk}
          onChange={changeInput}
        />
        고양이 추가
      </label>
      {isChk && <FriendsAdd onAdd={onAdd} />}
    </div>
  );
};

export default Friends;
