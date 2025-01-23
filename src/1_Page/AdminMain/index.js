import Header from "./ui/header/header";
import UserShape from "./ui/user_shape/UserShape";
import styled from "styled-components";

const AdminMain = () => {
  return (
    <Container>
      <Header />
      <UserShape />
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 90vh;
`;

export default AdminMain;
