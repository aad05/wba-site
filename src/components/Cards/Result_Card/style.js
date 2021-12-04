import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: 77%;
  margin-left: 30px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 200px;
`;

export const Box = styled.div`
  width: 440px;
  height: 70px;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
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
  transition: all 0.2s;
`;

export const Img = styled.img`
  width: 40px;
  height: 40px;
`;

export const Word = styled.div`
  font-size: ${({ large }) => (large ? "40px" : "24px")};
  margin-bottom: 1px;
  font-weight: ${({ large }) => (large ? "600" : "normal")};
`;