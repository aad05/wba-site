import React from "react";
import {
  Box,
  Conatiner,
  Wrapper,
  Img,
  Title,
  Item,
  Flexing,
  Icon,
  Div,
  Text,
} from "./style";
import sertifikat from "../../../assets/imgs/Sertificate.png";
import more from "../../../assets/icons/arrow-left.svg";

export const Sertifikat = () => {
  return (
    <Conatiner>
      {/* <Div>
        <Text>Sertifikat</Text>
      </Div> */}
      <Wrapper>
        <Box>
          <Img src={sertifikat} alt="Sertifikat" />
        </Box>
        <Box text>
          <Title>100+ talabalarimiz</Title>
          <Item>
            WebBrain akademiyasi o’z faoliyati davomida 100 dan ortiq dasturlash
            sohasi vakillarini tayyorlagan.
          </Item>
          <Item>
            {" "}
            Kursni tamomlagan talabalarning o’zlashtirish ko’rsatkichi e’tiborga
            olingan holda sertifikatlar beriladi.
          </Item>
          <Flexing>
            <Item more>Sertifikatni tekshirish</Item>
            <Icon src={more} alt="icon-img" />
          </Flexing>
        </Box>
      </Wrapper>
    </Conatiner>
  );
};

export default Sertifikat;
