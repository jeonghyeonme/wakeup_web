import styled from "styled-components";
import FindPwPage from "./ui/find_pw_page/FindPwPage";

const FindPw = () => {
  return (
    <Container>
      <FindPwPage />
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export default FindPw;
