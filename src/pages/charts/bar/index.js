import React, { PureComponent } from "react";
import { Card } from "antd";
import { BarWrapper } from "./style";
import echarts from "echarts";

export default class Bar extends PureComponent {
  render() {
    return (
      <BarWrapper>
        <Card title="柱形图表之一">
          <div id="one" style={{ height: 500 }} />
        </Card>
        <Card title="柱形图表之二">
          <div id="two" style={{ height: 500 }} />
        </Card>
      </BarWrapper>
    );
  }

  componentDidMount = () => {
    let oneChart = echarts.init(document.getElementById("one"));
    let twoChart = echarts.init(document.getElementById("two"));
    oneChart.setOption({
      title: { text: "用户骑行订单", textStyle: { color: "#dcdcdc" } },
      tooltip: {},
      legend: {
        data: ["订单"]
      },
      xAxis: {
        data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
      },
      yAxis: {},
      color: "#50eace",
      series: [
        {
          name: "订单",
          type: "bar",
          data: [1000, 2000, 1500, 3000, 2000, 1200, 800]
        }
      ]
    });

    twoChart.setOption({
      title: {
        text: "用户骑行订单",
        textStyle: { color: "#dcdcdc" }
      },
      tooltip: {
        trigger: "axis"
      },
      legend: {
        data: ["ofo", "摩拜", "小蓝"]
      },
      xAxis: {
        data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
        axisLine: {
          lineStyle: {
            color: "#dcdcdc"
          }
        },
        splitLine: { show: true, lineStyle: { color: "#dcdcdc" } }
      },
      yAxis: {
        axisLine: {
          lineStyle: {
            color: "#dcdcdc"
          }
        },
        splitLine: { lineStyle: { color: "#dcdcdc" } }
      },
      toolbox: {
        feature: {
          dataView: {},
          saveAsImage: {
            pixelRatio: 2
          },
          restore: {}
        }
      },
      series: [
        {
          name: "ofo",
          type: "bar",
          data: [2000, 3000, 5500, 7000, 8000, 12000, 5000],
          color: "#F9C700"
        },
        {
          name: "摩拜",
          type: "bar",
          data: [1500, 3000, 4500, 6000, 8000, 10000, 20000],
          color: "#FF5400"
        },
        {
          name: "小蓝",
          type: "bar",
          data: [1000, 2000, 2500, 4000, 6000, 7000, 8000],
          color: "#6699CC"
        }
      ]
    });
  };
}
