import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const LoginButton = () => (
  <Link to="/login">
    <Button variant="warning">로그인</Button>
  </Link>
);

const Home = () => {
  return (
    <Container className="mt-3">
      <h2>Home</h2>
      <div>
        <h3>로그인 해 주세요</h3>
        <LoginButton />
        <Link to="/signup" style={{ marginLeft: 10 }}>
          <Button variant="success">회원가입</Button>
        </Link>
      </div>
    </Container>
  );
};

export default Home;
