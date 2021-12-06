import React from "react";
import OnlineCourseCard from "../../Cards/Online_Courses_Card";
import Sardorbek_Muxtorov from "../../../assets/imgs/Sardor_Muxtorov.png";
import Hamza_Kuranbayev from "../../../assets/imgs/Hamza_Kuranbayev.png";
import Zohidjon_Akbarov from "../../../assets/imgs/Zohidjon_Akbarov.png";
import Carousel from "react-elastic-carousel";
import { Container, Wrapper } from "../style";

export const OnlineCardSection = () => {
  const breakPoints = [
    { width: 1200, itemsToShow: 2 },
    { width: 1300, itemsToShow: 3 },
    { width: 1600, itemsToShow: 3 },
  ];

  return (
    <Container>
      <Wrapper>
        <Carousel breakPoints={breakPoints}>
          <OnlineCourseCard
            logo={Sardorbek_Muxtorov}
            name="Sardorbek Muhtorov"
            price="100"
            status="Frontend"
          />
          <OnlineCourseCard
            logo={Hamza_Kuranbayev}
            name="Hamzatbek"
            price="120"
            status="Bekend"
          />
          <OnlineCourseCard
            logo={Zohidjon_Akbarov}
            name="Zohidjon"
            price="150"
            status="Mobile"
          />
          <OnlineCourseCard
            logo={Zohidjon_Akbarov}
            name="Zohidjon"
            price="150"
            status="Mobile"
          />
          <OnlineCourseCard
            logo={Hamza_Kuranbayev}
            name="Hamzatbek"
            price="120"
            status="Bekend"
          />
          <OnlineCourseCard
            logo={Sardorbek_Muxtorov}
            name="Sardorbek Muhtorov"
            price="100"
            status="Frontend"
          />
          <OnlineCourseCard
            logo={Sardorbek_Muxtorov}
            name="Sardorbek Muhtorov"
            price="100"
            status="Frontend"
          />
        </Carousel>
      </Wrapper>
    </Container>
  );
};

export default OnlineCardSection;
