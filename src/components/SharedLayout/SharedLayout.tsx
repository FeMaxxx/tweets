import React, { FC } from "react";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header, Container, Main, Button } from "./SharedLayout.styled";
import { Loader } from "../Loader";

export const SharedLayout: FC = () => {
  return (
    <Container>
      <Header>
        <Button to={"/"}>Home</Button>
        <Button to={"/tweets"}>Tweets</Button>
      </Header>

      <Main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Main>
    </Container>
  );
};
