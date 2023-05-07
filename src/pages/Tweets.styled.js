import styled from "styled-components";

export const CardsContainer = styled.div`
  display: flex;
  text-align: center;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  flex-direction: raw;
  gap: 30px;
  margin-left: auto;
  margin-right: auto;
`;
export const MainContainer = styled.div`
  display: block;
  margin: 20px auto;

`;

export const LoadMoreBtn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 28px;
  gap: 6px;
  width: 200px;
  background: white;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  margin: 26px auto;
  border: 1px solid black;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.2;
  text-transform: uppercase;
  color: #373737;
  cursor: pointer;
  :hover,
  focus {
    scale: 1.1;
    opacity: 1.2;
  }
`;
