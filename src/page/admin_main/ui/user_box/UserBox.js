import { Container, Text, Time } from "./style";

const UserBox = (props) => {
  return (
    <Container wakeup={props.wakeup}>
      <Text>{props.name}</Text>
      <Time>{props.time}</Time>
    </Container>
  );
};

export default UserBox;
