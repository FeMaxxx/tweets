import styled from "@emotion/styled";

export const Item = styled.li`
  position: relative;
  padding: 36px;
  padding-top: 28px;
  width: 380px;
  height: 460px;
  text-align: center;

  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const Logo = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 76px;
  height: 22px;
`;

export const Picture = styled.img`
  width: 100%;
  height: 168px;
`;

export const Avatar = styled.img`
  position: absolute;
  z-index: 100;
  top: 188px;
  left: 50%;
  transform: translate(-50%);
  width: 60px;
  height: 60px;

  border-radius: 50%;
`;

export const Circle = styled.div`
  position: absolute;
  z-index: 10;
  width: 80px;
  height: 80px;
  top: 178px;
  left: 50%;
  transform: translate(-50%);

  background: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  border-radius: 50%;
`;

export const CircleBg = styled.div`
  position: absolute;
  z-index: 11;
  width: 60px;
  height: 60px;
  top: 188px;
  left: 50%;
  transform: translate(-50%);

  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );

  border-radius: 50%;
`;

export const Line = styled.div`
  position: absolute;
  width: 380px;
  height: 8px;
  left: 0px;
  top: 214px;

  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const InfoBox = styled.div`
  position: absolute;
  left: 50%;
  top: 284px;
  width: 300px;
  transform: translate(-50%);

  display: flex;
  flex-direction: column;
  gap: 16px;

  text-transform: uppercase;

  color: #ebd8ff;
`;

export const FollowButton = styled.button`
  ${buttonsStyled()}
  background-color: #ebd8ff;

  transition: background-color 200ms ease-out;

  &:hover,
  &:focus {
    background-color: rgba(92, 211, 167, 0.8);
  }
`;

export const UnfollowButton = styled.button`
  ${buttonsStyled()}
  background-color: #5CD3A8;

  transition: background-color 200ms ease-out;

  &:hover,
  &:focus {
    background-color: rgba(211, 92, 92, 0.6);
  }
`;

function buttonsStyled() {
  return `
    position: absolute;
  width: 196px;
  height: 50px;
  left: 92px;
  top: 374px;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px 28px;

  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;

  font-family: "Montserrat";
  line-height: 1.22;
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  `;
}
