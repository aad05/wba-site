import React from "react";
import OurTeamSection from "../OurTimeSection";
import { Container, Wrapper, Main } from "./style";
export default function Home() {
  return (
    <Main>
      <Container>
        <Wrapper>
          <OurTeamSection />
        </Wrapper>
      </Container>
    </Main>
  );
}
