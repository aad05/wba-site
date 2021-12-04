import React from "react";
import { Circle, Container, Flexing, Icons, Img, Text } from "./style";
import cardFacebook from "../../../assets/icons/cardFacebook.svg";
import cardGithub from "../../../assets/icons/cardGithub.svg";
import cardYoutobe from "../../../assets/icons/cardYoutube.svg";
import cardInstagram from "../../../assets/icons/cardInstagram.svg";

export const OurTeamCard = ({ img, status, name }) => {
  return (
    <Container>
      <Circle>
        <Img src={img} alt="Teacher1" />
      </Circle>

      <Text>{name}</Text>
      <Text bottom small>
        {status} Developer
      </Text>

      <Flexing>
        <a
          href="https://www.facebook.com/search/top?q=webbrain%20academy"
          target="_blank"
        >
          <Icons src={cardFacebook} alt="icon" />
        </a>
        <a
          href="https://www.instagram.com/webbrain_academy/?hl=ru"
          target="_blank"
        >
          <Icons src={cardInstagram} alt="icon" />
        </a>
        <a href="https://www.youtube.com/c/WebBrainAcademy" target="_blank">
          <Icons src={cardYoutobe} alt="icon" />
        </a>
        <a href="https://github.com/" target="_blank">
          <Icons src={cardGithub} alt="icon" />
        </a>
      </Flexing>

      <Text width small>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacus eu,
        quam vitae vestibulum. In ullamcorper consectetur aliquam laoreet
        laoreet. Placerat dolor in dui, dignissim imperdiet malesuada felis
        neque.{" "}
      </Text>
    </Container>
  );
};

export default OurTeamCard;
