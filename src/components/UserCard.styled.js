import styled from "styled-components";
import { ReactComponent as Logo } from "../img/GoItLogo.svg";


export const UserCardContainer = styled.div`
  display: flex;
  flex: 0 0 25%;
  flex-direction: column;
  width: 380px;
  height: 460px;
  border: 1px solid black;
  border-radius: 20px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  position: relative;
`;
export const CardLogo = styled(Logo)`
  position: absolute;
  top: 20px;
  left: 20px;
`;
export const UpperContainer = styled.div`
  width: 100%;
  border-bottom: 8px solid #ebd8ff;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;

  img {
    padding: 28px 36px;
  }
`;

export const AvatarImage = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 62px;
  height: 62px;
  border: 8px solid #ebd8ff;
  border-radius: 50%;
  /* border-width: ;
  border-color: ; */
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 62px;
    height: 62px;
    border-radius: 50%;
  }
`;

export const BottomContainer = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin-top: 62px;

  p {
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 1.2;
    text-transform: uppercase;
    margin: 0;
    color: #ebd8ff;
    :first-child {
      margin-bottom: 16px;
    }
  }

  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 14px 28px;
    gap: 6px;
    width: 169px;
    background: #ebd8ff;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
    border-radius: 10.3108px;
    margin-top: 26px;
    border: none;
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
  }
`;

export const SelectContainer = styled.div`
  display: block;
  align-items: center;
  justify-content: center;
  width: 200px;

  margin: 10px auto;
  margin-bottom: 20px;
`;
