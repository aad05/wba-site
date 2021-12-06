import React from "react";
import { Container, Wrapper, Main } from "./style";
import Result_Bar from "./Result_Bar";
import OurTeamSection from "../OurTimeSection";
import OnlineCardSection from "./OnlineCardSection";
import Sertifikat from "./Sertifikat";
export default function Home() {
  return (
    <Main>
      <Container>
        <Wrapper>
          {/* <OnlineCardSection />
          <Result_Bar />
          <OurTeamSection /> */}
          <Sertifikat />
        </Wrapper>
      </Container>
    </Main>
  );
}
