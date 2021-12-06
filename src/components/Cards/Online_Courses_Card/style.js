import styled from "styled-components";

export const Container = styled.div`
  width: 440px;
  height: 610px;
  margin-left: 20px;
  margin-right: 20px;
  background: #e6e7ee;
  box-shadow: -5px -5px 8px #ffffff, 5px 5px 8px rgba(13, 39, 80, 0.16);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 40px;
  padding: 5px 0px;
  transition: all 0.4s;
  :hover {
    box-shadow: -10px -10px 8px #ffffff, 20px 20px 12px rgba(13, 39, 80, 0.16);
  }
  @media (min-width: 2000px) {
    height: 700px;
    flex-direction: column;
    justify-content: space-between;
  }
  /* @media (min-width: 1000px) {
    width: 30%;
  } */
  @media (max-width: 1350px) {
    height: 550px;
  }
  @media (max-width: 1250px) {
    height: 530px;
  }
`;

export const Img = styled.img`
  width: 98%;
  height: 45%;
  border-radius: 4px;
`;

export const Box = styled.div`
  width: 95%;
  height: 50%;
  margin-top: 14px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  @media (max-width: 2000px) {
    margin-bottom: 20px;
  }
  @media (max-width: 1250px) {
    padding-top: 10px;
  }
`;

export const Flexing = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${({ top }) => top && "30px"};
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
  cursor: ${({ more }) => more && "pointer"};
`;

export const ImgDiv = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  margin-right: 12px;
`;

export const Name = styled.div`
  color: #31344b;
  font-size: ${({ large }) => (large ? "28px" : "17px")};
`;

export const Item = styled.div`
  margin-top: ${({ more }) => (more ? "0px" : "25px")};
  margin-right: ${({ more }) => more && "10px"};
  font-weight: ${({ more }) => !more && "600"};
  color: ${({ more }) => more && "#2D4CC8"};
  font-size: ${({ more }) => (more ? "16px" : "20px")};
  margin-bottom: 3px;
  @media (max-width: 1160px) {
    font-size: ${({ more }) => (more ? "13px" : "18px")};
  }
`;

export const Text = styled.p`
  margin-right: 10px;
  color: rgba(49, 52, 75, 0.6);
  font-size: ${({ small }) => (small ? "15px" : "18px")};
  margin-top: ${({ small }) => small && "13px"};
  @media (max-width: 1152px) {
    font-size: ${({ small }) => (small ? "13px" : "18px")};
  }
`;

export const Star = styled.img`
  width: ${({ more }) => (more ? "8px" : "20px")};
  margin-right: ${({ more }) => more && "15px"};
`;

export const Btn = styled.div`
  background: #e6e7ee;
  box-shadow: -5px -5px 8px #ffffff, 5px 5px 8px rgba(13, 39, 80, 0.16);
  border-radius: 8px;
  width: 180px;
  color: #31344b;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  cursor: pointer;
  :hover {
    box-shadow: inset -5px -5px 8px rgba(255, 255, 255, 0.64),
      inset 5px 5px 8px rgba(13, 39, 80, 0.16);
  }
  @media (max-width: 1260px) {
    width: 150px;
  }
  @media (max-width: 1100px) {
    width: 130px;
  }
`;
