import "./App.css";
import KakaoAPI from "./Kakao/KakaoAPI";
import KakaoAPI2 from "./Kakao2/KakaoAPI2";
import Main from "./newsAPI/Main";
import NewAPI from "./newsAPI2/NewAPI";

function App() {
  return (
    <>
      {/*<Main />
      <NewAPI />
      <KakaoAPI /> */}
      <KakaoAPI2 />
    </>
  );
}

export default App;
