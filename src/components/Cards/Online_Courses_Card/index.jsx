import React from "react";
import {
  Container,
  Img,
  Box,
  Flexing,
  Div,
  ImgDiv,
  Name,
  Item,
  Star,
  Text,
  Btn,
} from "./style";
import img from "../../../assets/img/onlineCard.png";
import star from "../../../assets/icon/star.svg";
import more from "../../../assets/icon/more.svg";

export const OnlineCourseCard = ({ logo, name, price, status }) => {
  return (
    <Container>
      <Img src={img} alt="online-img" />
      <Box>
        <Flexing>
          <Div>
            <ImgDiv src={logo} alt="ImgDiv" />
            <Name>{name}</Name>
          </Div>
          <Div>
            <Name large>
              <strong>{price}$</strong>
              /moth
            </Name>
          </Div>
        </Flexing>
        <Item>{status} Bootcamp</Item>
        <Div>
          <Text>5.0</Text>
          <Star src={star} alt="star" />
          <Star src={star} alt="star" />
          <Star src={star} alt="star" />
          <Star src={star} alt="star" />
          <Star src={star} alt="star" />
        </Div>
        <Text small>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
          velit consectetur donec ornare at sagittis. Nisl nisi odio viverra
          nunc pharetra.
        </Text>
        <Flexing top>
          <Btn>Buy now</Btn>
          <Div more>
            <Item more>Watch Intro</Item>
            <Star more src={more} alt="icon" />
          </Div>
        </Flexing>
      </Box>
    </Container>
  );
};

export default OnlineCourseCard;