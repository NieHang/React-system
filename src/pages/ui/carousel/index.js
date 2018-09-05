import React, { PureComponent } from 'react';
import { Card, Carousel } from "antd";
import { CarouselWrapper } from "./style";

export default class CarouselExample extends PureComponent {
  render() {
    return (
      <CarouselWrapper>
        <Card title='文字背景轮播' className='font'>
          <Carousel autoplay>
            <div><h3>1</h3></div>
            <div><h3>2</h3></div>
            <div><h3>3</h3></div>
            <div><h3>4</h3></div>
          </Carousel>
        </Card>
        <Card title='图片背景轮播' className='pic'>
          <Carousel autoplay>
            <img src="http://imoocms.51purse.com/assets/carousel-img/carousel-2.jpg" alt=""/>
            <img src="http://imoocms.51purse.com/assets/carousel-img/carousel-3.jpg" alt=""/>
            <img src="https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262__340.jpg" alt=""/>
          </Carousel>
        </Card>
      </CarouselWrapper>
    )
  }
}
