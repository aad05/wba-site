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
import Online_Card from "../../../assets/imgs/Online_Corses.png";
import star from '../../../assets/icons/star.svg'
import Arrow_left from '../../../assets/icons/arrow-left.svg'

export const OnlineCourseCard = ({ logo, name, price, status }) => {
  return (
    <Container>
      <Img src={Online_Card} alt="online-img" />
      <Box>
        <Flexing>
          <Div>
            <ImgDiv src={logo} alt="ImgDiv" />
            <Name>{name}</Name>
          </Div>
          <Div>
            <Name large={true}>
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
        <Text small={true}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
          velit consectetur donec ornare at sagittis. Nisl nisi odio viverra
          nunc pharetra.
        </Text>
        <Flexing top={true}>
          <Btn>Buy now</Btn>
          <Div more={true}>
            <Item more={true}>Watch Intro</Item>
            <Star more={true} src={Arrow_left} alt="icon" />
          </Div>
        </Flexing>
      </Box>
    </Container>
  );
};

export default OnlineCourseCard;