import styled from "styled-components";

export const Conatiner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* margin-top: 200px; */
  /* margin-bottom: 100px; */
`;

export const Wrapper = styled.div`
  width: 92%;
  height: 600px;
  background: #e6e7ee;
  box-shadow: -5px -5px 8px #ffffff, 5px 5px 8px rgba(13, 39, 80, 0.16);
  border-radius: 8px;
  padding: 40px 20px 30px 80px;
  display: flex;
  margin-top: 80px;
  @media (max-width: 1500px) {
    height: 450px;
    padding: 20px 30px 20px 40px;
  }
  @media (max-width: 1100px) {
    height: 370px;
    padding: 20px 30px 20px 40px;
  }
`;

export const Box = styled.div`
  flex: ${({ text }) => (text ? "4" : "5")};
  margin-top: ${({ text }) => text && "80px"};
  padding-left: ${({ text }) => text && "100px"};
  @media (max-width: 1700px) {
    margin-top: ${({ text }) => text && "10px"};
    padding-left: ${({ text }) => text && "60px"};
  }
  @media (max-width: 1500px) {
    margin-top: ${({ text }) => text && "40px"};
    padding-left: ${({ text }) => text && "60px"};
  }
  @media (max-width: 1100px) {
    margin-top: ${({ text }) => text && "30px"};
    padding-left: ${({ text }) => text && "50px"};
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 500px;
  @media (max-width: 1500px) {
    height: 100%;
  }
  @media (max-width: 1100px) {
    height: 320px;
  }
`;

export const Title = styled.div`
  font-size: 40px;
  font-weight: 600;
  @media (max-width: 1500px) {
    font-size: 34px;
  }
  @media (max-width: 1100px) {
    font-size: 25px;
  }
`;

export const Item = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 23px;
  line-height: 32px;
  color: ${({ more }) => (more ? "#2D4CC8" : "rgba(49, 52, 75, 0.6)")};
  margin-top: ${({ more }) => (more ? "0px" : "25px")};
  @media (max-width: 1500px) {
    margin-top: ${({ more }) => (more ? "0px" : "10px")};
    font-size: 18px;
    line-height: 23px;
  }
  @media (max-width: 1300px) {
    margin-top: ${({ more }) => (more ? "0px" : "10px")};
    font-size: 17px;
    line-height: 20px;
  }
  @media (max-width: 1100px) {
    margin-top: ${({ more }) => (more ? "0px" : "15px")};
    font-size: 15px;
    line-height: 20px;
  }
`;

export const Flexing = styled.div`
  display: flex;
  align-items: center;
  margin-top: 140px;
  cursor: pointer;
  @media (max-width: 1500px) {
    margin-top: 140px;
  }
  @media (max-width: 1100px) {
    margin-top: 75px;
  }
`;

export const Icon = styled.img`
  width: 10px;
  margin-left: 40px;
  @media (max-width: 1100px) {
    width: 8px;
    margin-left: 30px;
  }
`;

export const Div = styled.div`
  display: flex;
  width: 75%;
  @media (max-width: 1100px) {
  }
`;

export const Text = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 52px;
  line-height: 78px;
  color: #31344b;
  @media (max-width: 1100px) {
  }
`;
