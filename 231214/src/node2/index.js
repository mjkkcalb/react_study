const express = require("express");
const app = express();

// app.use([path,] callback [, callback...]);
// app.use((req, res) => {
//   console.log("서버 실행");
//   res.send("<h1>Express 실행</h1>");
// });

// EJS 템플릿 엔진 설정
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  // res.send("<h1>라우터 첫 페이지</h1>");
  // 클라이언트에게 파일 전송
  res.sendFile(__dirname + "/index.html");
});

app.get("/coffee", (req, res) => {
  res.send("<h2>coffee 페이지</h2>");
});

app.get("/tea", (req, res) => {
  res.send("<h2>tea 페이지</h2>");
});

// ** 항상 라우터들 중 제일 마지막에 작성
app.get("*", (req, res) => {
  res.send("페이지를 찾을 수 없습니다");
});

//app.listen([port[, callback]); 서버 실행 및 클라이언트 요청 대기 함수
app.listen(8080, () => {
  console.log("8080 포트로 서버 실행");
});
