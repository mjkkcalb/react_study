import { useCallback, useRef, useState } from "react";
import { Container, Button, Form, Alert } from "react-bootstrap";

const SignUp = () => {
  const storageUserList = JSON.parse(localStorage.getItem("user")) || [];
  // 사용자 리스트
  const no = useRef(storageUserList.length + 1);

  const [user, setUser] = useState(storageUserList);
  const [msg, setMsg] = useState("가입 확인");
  const [isShow, setIsShow] = useState(false);
  const [formData, setFormData] = useState({
    userId: "",
    userPw: "",
    userGroup: "",
    userEmail: "",
  });
  const { userId, userPw, userGroup, userEmail } = formData;

  localStorage.setItem("user", JSON.stringify(user));

  // 사용자 입력 값을 폼 데이터에 업데이트
  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // 아이디 확인
    const isChkId = storageUserList.find((user) => user.userId === userId);
    if (isChkId) {
      setMsg("이미 가입된 아이디입니다");
      setIsShow(true);
      return;
    }

    // 사용자 입력
    const newUser = {
      id: no.current++,
      userId,
      userPw,
      userGroup,
      userEmail,
    };

    setUser((prevData) => [...prevData, newUser]);

    // 폼 초기화
    setFormData({
      userId: "",
      userPw: "",
      userGroup: "",
      userEmail: "",
    });

    alert("회원가입 성공");
  };

  return (
    <Container className="mt-3">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>아이디</Form.Label>
          <Form.Control
            type="text"
            placeholder="아이디를 입력하세요"
            name="userId"
            value={userId}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>비밀번호</Form.Label>
          <Form.Control
            type="password"
            placeholder="비밀번호를 입력하세요"
            name="userPw"
            value={userPw}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>소속</Form.Label>
          <Form.Control
            type="text"
            placeholder="소속을 입력하세요"
            name="userGroup"
            value={userGroup}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>이메일</Form.Label>
          <Form.Control
            type="email"
            placeholder="이메일을 입력하세요"
            name="userEmail"
            value={userEmail}
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

export default SignUp;
