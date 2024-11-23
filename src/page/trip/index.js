import styled from "styled-components";
import TripPage from "./ui/trip_page/TripPage";

const Trip = () => {
  return (
    <Container>
      <TripPage />
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 90vh;
`;

export default Trip;
