import React, { PureComponent } from "react";
import { Card } from "antd";
import { LineWrapper } from "./style";
import echarts from 'echarts';

export default class Line extends PureComponent {
  render() {
    return (
      <LineWrapper>
        <Card title="折线图表一">
          <div id="one" style={{height: 500}}/>
        </Card>
        <Card title="折线图表二">
          <div id="two" style={{height: 500}}/>
        </Card>
        <Card title="折线图表三">
          <div id="three" style={{height: 500}}/>
        </Card>
      </LineWrapper>
    );
  }

  componentDidMount = () => {
    let oneChart = echarts.init(document.getElementById('one'));
    let twoChart = echarts.init(document.getElementById('two'));
    let threeChart = echarts.init(document.getElementById('three'));

    oneChart.setOption({
      title: { text: "用户骑行订单", textStyle: { color: "#dcdcdc" } },
      tooltip: {
        trigger: "axis"
      },
      legend: {
        data: ["OFO订单"]
      },
      xAxis: {
        data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
      },
      yAxis: {},
      color: "yellow",
      series: [
        {
          name: "OFO订单",
          type: "line",
          symbolSize: 20,
          data: [1000, 2000, 1500, 3000, 2000, 1200, 800]
        }
      ]
    });

    twoChart.setOption({
      title: { text: "用户骑行订单", textStyle: { color: "#dcdcdc" } },
      tooltip: {
        trigger: "axis"
      },
      legend: {
        data: ["OFO订单量", "摩拜订单量"]
      },
      xAxis: {
        data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
      },
      yAxis: {},
      series: [
        {
          name: "OFO订单量",
          type: "line",
          symbolSize: 20,
          color: "yellow",
          data: [1000, 2000, 4500, 6000, 8000, 10000, 12000]
        },
        {
          name: "摩拜订单量",
          type: "line",
          symbolSize: 20,
          color: "#FF5400",
          data: [1200, 3000, 5500, 7000, 9000, 12000, 20000]
        }
      ]
    });

    threeChart.setOption({
      title: { text: "用户骑行订单", textStyle: { color: "#dcdcdc" } },
      tooltip: {
        trigger: "axis"
      },
      legend: {
        data: ["订单量"]
      },
      xAxis: {
        boundaryGap: false,
        data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
      },
      yAxis: {},
      color: "yellow",
      series: [
        {
          name: "订单量",
          type: "line",
          symbolSize: 20,
          areaStyle: {},
          data: [1000, 2000, 1500, 3000, 2000, 1200, 800]
        }
      ]
    });
  }
  
}
