import styled from "styled-components";

export const CarouselWrapper = styled.div`
  position: relative;
  margin: 5px 0px;
  padding: 24px;
  button {
    margin-left: 20px;
  }
  .ant-card {
    margin-bottom: 20px;
  }
  .font {
    .ant-carousel .slick-slide {
      text-align: center;
      height: 160px;
      line-height: 160px;
      background: #364d79;
      overflow: hidden;
    }

    .ant-carousel .slick-slide h3 {
      color: #fff;
    }
  }
  .pic {
    .ant-carousel .slick-slide img {
      height: 400px;
    }
  }
`;
