import React from "react";
import OurTeamCard from "../Cards/OurTeamCard";
import Sardorbek from "../../assets/imgs/Sardorbek.png";
import Zohidjon from "../../assets/imgs/Zohidjon.png";
import Hamzatbek from "../../assets/imgs/Hamzatbek.png";
import { Container } from "./style";

export const OurTimeSection = () => {
  return (
    <Container>
      <OurTeamCard
        img={Sardorbek}
        name="Sardorbek Muhtorov"
        status="Frontend"
      />
      {/* <OurTeamCard
        img={Sardorbek}
        name="Sardorbek Muhtorov"
        status="Frontend"
      />
      <OurTeamCard
        img={Sardorbek}
        name="Sardorbek Muhtorov"
        status="Frontend"
      />
      <OurTeamCard
        img={Sardorbek}
        name="Sardorbek Muhtorov"
        status="Frontend"
      />
      <OurTeamCard
        img={Sardorbek}
        name="Sardorbek Muhtorov"
        status="Frontend"
      />
      <OurTeamCard
        img={Sardorbek}
        name="Sardorbek Muhtorov"
        status="Frontend"
      /> */}
    </Container>
  );
};

export default OurTimeSection;
