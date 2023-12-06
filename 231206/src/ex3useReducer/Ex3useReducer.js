import React from "react";
import Student from "./Student";

const Ex3useReducer = () => {
  return (
    <div>
      <h2>ex3</h2>
      <h3>총 학생 수: {} </h3>
      <input type="text" />
      <button>추가</button>
      <hr />
      <ol>
        <Student />
      </ol>
    </div>
  );
};

export default Ex3useReducer;
