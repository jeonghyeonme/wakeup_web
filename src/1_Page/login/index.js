import styled from "styled-components";
import LoginPage from "./ui/login_page/LoginPage";

const Login = () => {
  return (
    <Container>
      <LoginPage />
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export default Login;
