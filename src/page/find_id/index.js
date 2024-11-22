import styled from "styled-components";
import FindIdPage from "./ui/find_id_page/FindIdPage";

const FindPw = () => {
  return (
    <Container>
      <FindIdPage />
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export default FindIdPage;
