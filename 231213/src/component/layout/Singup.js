import { useCallback, useState } from "react";
import { Container, Button, Form, Alert } from "react-bootstrap";

const Signup = () => {
  const [user, setUser] = useState();
  const [msg, setMsg] = useState("가입 확인");
  const [isShow, setIsShow] = useState(false);
  const [formData, setFormData] = useState({
    userId: "",
    userPw: "",
    userGroup: "",
    userEmail: "",
  });
  const { userId, userPw, userGroup, userEmail } = formData;

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }, []);

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

        <Form.Group className="mb-3">
          <Form.Label>소속</Form.Label>
          <Form.Control
            type="text"
            placeholder="소속을 입력하세요"
            name="userGroup"
            value
            onChange
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>이메일</Form.Label>
          <Form.Control
            type="email"
            placeholder="이메일을 입력하세요"
            name="userEmail"
            value
            onChange={handleChange}
          />
        </Form.Group>

        {isShow && <Alert variant="danger">{msg}</Alert>}

        <Button variant="primary" type="submit">
          회원가입
        </Button>
      </Form>
    </Container>
  );
};

export default Signup;
