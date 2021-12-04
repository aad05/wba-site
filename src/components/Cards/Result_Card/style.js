import styled from "styled-components";

export const Box = styled.div`
  width: 350px;
  height: 70px;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media(max-width:1900px){
    width: 33.3%;
  }
  @media(min-width:1900px){
    width: 33.3%;
  }
`;

export const Circle = styled.div`
  background: #e6e7ee;
  box-shadow: -5px -5px 8px #ffffff, 5px 5px 8px rgba(13, 39, 80, 0.16);
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-right: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media(min-width: 1900px){  
    width: 140px;
    height: 140px;
  }
  @media(max-width: 1900px){  
    width: 130px;
    height: 130px;
  }
  @media(max-width: 1800px){  
    width: 120px;
    height: 120px;
  }
  @media(max-width: 1600px){  
    width: 110px;
    height: 110px;
  }
  @media(max-width: 1350px){  
    width: 100px;
    height: 100px;
  }
`;

export const Img = styled.img`
  width: 40px;
  height: 40px;
  @media(min-width:1900px){
    width: 60px;
    height: 60px;
  }
  @media(max-width:1900px){
    width: 55px;
    height: 55px;
  }
  @media(max-width:1800px){
    width: 50px;
    height: 50px;
  }
  @media(max-width:1600px){
    width: 45px;
    height: 45px;
  }
`;

export const Word = styled.div`
  font-size: ${({ large }) => (large ? "40px" : "24px")};
  margin-bottom: 1px;
  font-weight: ${({ large }) => (large ? "600" : "normal")};
  @media(max-width:1900px){
  font-size: ${({ large }) => (large ? "40px" : "23px")};
  }
  @media(max-width:1600px){
  font-size: ${({ large }) => (large ? "30px" : "20px")};
  }
  @media(max-width:1350px){
  font-size: ${({ large }) => (large ? "25px" : "18px")};
  }
`;