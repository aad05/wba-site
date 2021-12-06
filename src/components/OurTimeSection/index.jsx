import React from "react";
import OurTeamCard from "../Cards/OurTeamCard";
import Sardorbek from "../../assets/imgs/Sardorbek.png";
import Zohidjon from "../../assets/imgs/Zohidjon.png";
import Hamzatbek from "../../assets/imgs/Hamzatbek.png";
import { Container, Wrapper } from "./style";
import Carousel from "react-elastic-carousel";

const breakPoints = [
  { width: 1200, itemsToShow: 2 },
  { width: 1300, itemsToShow: 3 },
  { width: 1600, itemsToShow: 3 },
];

export const OurTeamSection = () => {
  return (
    <Container>
      <Wrapper>
        <Carousel breakPoints={breakPoints}>
          <OurTeamCard
            img={Sardorbek}
            name="Sardorbek Muhtorov"
            status="Frontend"
          />
          <OurTeamCard
            img={Hamzatbek}
            name="Hamzatbek Muhtorov"
            status="Bekend"
          />
          <OurTeamCard
            img={Zohidjon}
            name="Zohidjon Muhtorov"
            status="Mobile"
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
        </Carousel>
      </Wrapper>
    </Container>
  );
};

export default OurTeamSection;
