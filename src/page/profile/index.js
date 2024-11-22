import styled from "styled-components";
import ProfilePage from "./ui/profile_page/ProfilePage";

const Profile = () => {
  return (
    <Container>
      <ProfilePage />
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 90vh;
`;

export default Profile;
