import styled from "styled-components";
import CrewPage from "./ui/crew_page/CrewPage";

const Crew = () => {
  return (
    <Container>
      <CrewPage />
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 90vh;
`;

export default Crew;
