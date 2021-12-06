import React from "react";
import { Container, Wrapper, Main } from "./style";
import Result_Bar from "./Result_Bar";
import Online_Card from "../Cards/Online_Courses_Card";
export default function Home() {
  return (
    <Main>
      <Container>
        <Wrapper>
          <Online_Card />
          <Result_Bar />
        </Wrapper>
      </Container>
    </Main>
  );
}
