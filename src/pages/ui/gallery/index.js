import React, { PureComponent } from "react";
import { Card, Row, Col } from "antd";
import { GalleryWrapper } from "./style";

export default class Gallery extends PureComponent {
  render() {
    const { Meta } = Card;
    return (
      <GalleryWrapper>
        <Row type="flex">
          <Col span={5}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={
                <img
                  alt="example"
                  src="https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262__340.jpg"
                />
              }
            >
              <Meta title="猫" description="Pixabay" />
            </Card>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={
                <img
                  alt="example"
                  src="https://cdn.pixabay.com/photo/2017/11/14/13/06/kitty-2948404__340.jpg"
                />
              }
            >
              <Meta title="猫" description="Pixabay" />
            </Card>
          </Col>
          <Col span={5}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={
                <img
                  alt="example"
                  src="https://cdn.pixabay.com/photo/2013/04/01/03/45/cat-98359__340.jpg"
                />
              }
            >
              <Meta title="猫" description="Pixabay" />
            </Card>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={
                <img
                  alt="example"
                  src="https://cdn.pixabay.com/photo/2016/01/20/13/05/cat-1151519__340.jpg"
                />
              }
            >
              <Meta title="猫" description="Pixabay" />
            </Card>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={
                <img
                  alt="example"
                  src="https://cdn.pixabay.com/photo/2016/06/14/00/14/cat-1455468__340.jpg"
                />
              }
            >
              <Meta title="猫" description="Pixabay" />
            </Card>
          </Col>
          <Col span={5}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={
                <img
                  alt="example"
                  src="https://cdn.pixabay.com/photo/2015/02/25/17/56/cat-649164__340.jpg"
                />
              }
            >
              <Meta title="猫" description="Pixabay" />
            </Card>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={
                <img
                  alt="example"
                  src="https://cdn.pixabay.com/photo/2015/11/15/22/09/cat-1044914__340.jpg"
                />
              }
            >
              <Meta title="猫" description="Pixabay" />
            </Card>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={
                <img
                  alt="example"
                  src="https://cdn.pixabay.com/photo/2016/09/05/21/37/cat-1647775__340.jpg"
                />
              }
            >
              <Meta title="猫" description="Pixabay" />
            </Card>
          </Col>
          <Col span={5}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={
                <img
                  alt="example"
                  src="https://cdn.pixabay.com/photo/2015/11/16/22/14/cat-1046544__340.jpg"
                />
              }
            >
              <Meta title="猫" description="Pixabay" />
            </Card>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={
                <img
                  alt="example"
                  src="https://cdn.pixabay.com/photo/2017/04/30/18/33/cat-2273598__340.jpg"
                />
              }
            >
              <Meta title="猫" description="Pixabay" />
            </Card>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={
                <img
                  alt="example"
                  src="https://cdn.pixabay.com/photo/2017/07/25/01/22/cat-2536662__340.jpg"
                />
              }
            >
              <Meta title="猫" description="Pixabay" />
            </Card>
          </Col>
          <Col span={4}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={
                <img
                  alt="example"
                  src="https://cdn.pixabay.com/photo/2016/12/30/12/16/cat-1940487__340.jpg"
                />
              }
            >
              <Meta title="猫" description="Pixabay" />
            </Card>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={
                <img
                  alt="example"
                  src="https://cdn.pixabay.com/photo/2016/09/07/16/19/bremen-town-musicians-1651945__340.jpg"
                />
              }
            >
              <Meta title="小团体" description="Pixabay" />
            </Card>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={
                <img
                  alt="example"
                  src="https://cdn.pixabay.com/photo/2016/03/28/10/05/kitten-1285341__340.jpg"
                />
              }
            >
              <Meta title="猫" description="Pixabay" />
            </Card>
          </Col>
        </Row>
      </GalleryWrapper>
    );
  }
}
