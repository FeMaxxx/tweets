import React, { FC } from "react";
import { Button, Container, Title } from "./Home.styled";

const Home: FC = () => {
  return (
    <Container>
      <Title>Welcome to the tweets website</Title>
      <Button to={"/tweets"}>Go to tweets</Button>
    </Container>
  );
};

export default Home;
