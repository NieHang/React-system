import styled from "styled-components";

export const NavBox = styled.div`
  position: relative;
  width: 240px;
  height: calc(100vh);
  background-color: #001529;
  overflow: hidden;
  .menu {
    width: 240px;
    height: 100%;
  }
`;

export const Logo = styled.div`
  position: relative;
  width: 100%;
  height: 90px;
  background-color: #002140;
  .logo_box {
    position: absolute;
    width: 150px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .logo_img {
      width: 40px;
      height: 40px;
    }
    span {
      font-size: 20px;
      font-weight: bold;
      margin-left: 10px;
      color: #fff;
      vertical-align: middle;
    }
  }
`;