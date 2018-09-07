import styled from "styled-components";

export const HeaderWrapper = styled.div`
  background-color: #fff;
  padding: 0;
  overflow: hidden;
  .header_user {
    float: right;
    height: 64px;
    line-height: 64px;
    span:first-child {
      color: #999;
    }
    span:last-child {
      color: orange;
      margin: 0 50px;
      cursor: pointer;
    }
  }
  .header_info {
    height: 44px;
    line-height: 44px;
    clear: both;
    border-top: 1px solid orange;
    .pageName {
      position: absolute;
      font-size: 14px;
      margin-left: 100px;
      &::after {
        position: absolute;
        content: "";
        width: 20px;
        height: 20px;
        left: 50%;
        bottom: -15px;
        background-color: #fff;
        transform: rotate(45deg) translate(-50%);
      }
    }
    audio {
      margin-left: 400px;
    }
    .time_weather {
      float: right;
      .time {
        margin-right: 50px;
        color: #999;
      }
      .ant-btn {
        margin-right: 50px;
      }
    }
  }
`;
