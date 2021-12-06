import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 1600px;
  margin-top: 100px;
  @media (max-width: 1500px) {
    width: 1000px;
  }
  @media (max-width: 1300px) {
    width: 850px;
  }
  @media (max-width: 1100px) {
    width: 800px;
  }
`;
