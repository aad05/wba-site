import React from "react";
import { Container, Wrapper, Main } from "./style";
import Result_Bar from "./Result_Bar";
import OurTeamSection from "../OurTimeSection";
import OnlineCardSection from "./OnlineCardSection";
export default function Home() {
  return (
    <Main>
      <Container>
        <Wrapper>
          <OnlineCardSection />
          <Result_Bar />
          <OurTeamSection />
        </Wrapper>
      </Container>
    </Main>
  );
}
