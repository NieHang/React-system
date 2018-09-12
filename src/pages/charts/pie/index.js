import React, { PureComponent } from 'react'
import { Card } from 'antd';
import { PieWrapper } from './style';
import echarts from 'echarts';

export default class Pie extends PureComponent {
  render() {
    return <PieWrapper>
        <Card title="饼形图表之一">
          <div id="one" style={{ height: 500 }} />
        </Card>
        <Card title="饼形图表之二">
          <div id="two" style={{ height: 500 }} />
        </Card>
        <Card title="饼形图表之三">
          <div id="three" style={{ height: 500 }} />
        </Card>
      </PieWrapper>;
  }

  componentDidMount = () => {
    let oneChart    = echarts.init(document.getElementById('one'));
    let twoChart    = echarts.init(document.getElementById('two'));
    let threeChart  = echarts.init(document.getElementById('three'));

    oneChart.setOption({
      title: {
        text: "用户骑行订单",
        textStyle: {
          color: "#50eace"
        },
        x: "center"
      },
      tooltip: {
        trigger: "item"
      },
      legend: {
        orient: 'vertical',
        left: 'right',
        data: ["周一", "周二", "周三", "周四", "周五", '周六', '周日']
      },
      series: [
        {
          name: '订单量',
          type: 'pie',
          radius: '55%',
          center: ['50%', '60%'],
          data: [
            {value: 1000, name: '周一'},
            {value: 2000, name: '周二'},
            {value: 3000, name: '周三'},
            {value: 4000, name: '周四'},
            {value: 5000, name: '周五'},
            {value: 6000, name: '周六'},
            {value: 7000, name: '周日'}
          ]
        }
      ]
    });

    twoChart.setOption({
      title: {
        text: "用户骑行订单",
        textStyle: {
          color: "#50eace"
        },
        x: "center"
      },
      tooltip: {
        trigger: "item"
      },
      legend: {
        orient: "vertical",
        left: "right",
        data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
      },
      series: [
        {
          name: '订单量',
          type: 'pie',
          radius: ['50%', '70%'],
          data: [
            { value: 1000, name: '周一' },
            { value: 2000, name: '周二' },
            { value: 3000, name: '周三' },
            { value: 4000, name: '周四' },
            { value: 5000, name: '周五' },
            { value: 6000, name: '周六' },
            { value: 7000, name: '周日' }
          ]
        }
      ]
    });

    threeChart.setOption({
      title: {
        text: "用户骑行订单",
        textStyle: {
          color: "#50eace"
        },
        x: "center"
      },
      tooltip: {
        trigger: "item"
      },
      legend: {
        orient: "vertical",
        left: "right",
        data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
      },
      series: [
        {
          name: "订单量",
          type: "pie",
          radius: "50%",
          data: [
            { value: 1500, name: "周一" },
            { value: 2000, name: "周二" },
            { value: 2500, name: "周三" },
            { value: 3000, name: "周四" },
            { value: 3400, name: "周五" },
            { value: 4000, name: "周六" },
            { value: 4500, name: "周日" }
          ],
          roseType: 'radius'
        }
      ]
    });
  }
  
}
