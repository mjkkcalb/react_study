import { Container, Button, Form, Alert } from "react-bootstrap";

const Login = () => {
  return (
    <Container className="mt-3">
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>아이디</Form.Label>
          <Form.Control
            type="text"
            placeholder="아이디를 입력하세요"
            name="userId"
            value
            onChange
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>비밀번호</Form.Label>
          <Form.Control
            type="password"
            placeholder="비밀번호를 입력하세요"
            name="userPw"
            value
            onChange
          />
        </Form.Group>

        {/* <Alert variant="danger">아이디나 비밀번호가 틀렸습니다</Alert> */}

        <Button variant="primary" type="submit">
          로그인
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
