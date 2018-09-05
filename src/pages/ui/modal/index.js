import React, { PureComponent } from "react";
import { ModalWrapper } from "./style";
import { Card, Button, Modal } from "antd";

export default class Model extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      visible1: false,
      visible2: false,
      visible3: false
    };

    this.showModal = this.showModal.bind(this);
    this.handleOk = this.handleOk.bind(this);
    this.handleCancel = this.handleCancel.bind(this);

    this.showConfirm = this.showConfirm.bind(this);
    this.info = this.info.bind(this);
    this.success = this.success.bind(this);
    this.error = this.error.bind(this);
    this.warning = this.warning.bind(this);
  }

  render() {
    const { visible, visible1, visible2, visible3 } = this.state;
    return (
      <ModalWrapper>
        <Card title="基础模态框">
          <Button type="primary" context="0" onClick={this.showModal}>
            open
          </Button>
          <Button type="primary" context="1" onClick={this.showModal}>
            自定义页脚
          </Button>
          <Button type="primary" context="2" onClick={this.showModal}>
            距顶部20px
          </Button>
          <Button type="primary" context="3" onClick={this.showModal}>
            水平垂直居中
          </Button>
          <Modal
            title="React实践"
            visible={visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            footer={[
              <Button key="cancel" context="0" onClick={this.handleCancel}>
                Cancel
              </Button>,
              <Button
                key="confirm"
                type="primary"
                context="0"
                onClick={this.handleOk}
              >
                Ok
              </Button>
            ]}
          >
            React实践
          </Modal>
          <Modal
            title="自定义页脚"
            visible={visible1}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            footer={[
              <Button key="cancel" context="1" onClick={this.handleCancel}>
                取消
              </Button>,
              <Button key="confirm" context="1" onClick={this.handleOk}>
                确定
              </Button>
            ]}
          >
            米奇妙妙屋
          </Modal>
          <Modal
            title="距顶部20px"
            style={{top: 20}}
            visible={visible2}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            footer={[
              <Button key="cancel" context="2" onClick={this.handleCancel}>
                取消
              </Button>,
              <Button key="confirm" context="2" onClick={this.handleOk}>
                确定
              </Button>
            ]}
          >
            距顶部20px
          </Modal>
          <Modal
            title="水平垂直居中"
            centered
            visible={visible3}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            footer={[
              <Button key="cancel" context="3" onClick={this.handleCancel}>
                取消
              </Button>,
              <Button key="confirm" context="3" onClick={this.handleOk}>
                确定
              </Button>
            ]}
          >
            水平垂直居中
          </Modal>
        </Card>
        <Card title='信息确认框'>
          <Button type='primary' onClick={this.showConfirm}>Confirm</Button>
          <Button type='primary' onClick={this.info}>Info</Button>
          <Button type='primary' onClick={this.success}>Success</Button>
          <Button type='primary' onClick={this.error}>Error</Button>
          <Button type='primary' onClick={this.warning}>Warning</Button>          
        </Card>
      </ModalWrapper>
    );
  }

  showModal(e) {
    let index = e.target.getAttribute("context");
    switch (index) {
      case "0":
        this.setState(() => ({
          visible: true
        }));
        break;
      case "1":
        this.setState(() => ({
          visible1: true
        }));
        break;
      case "2":
        this.setState(() => ({
          visible2: true
        }));
        break;
      case "3":
        this.setState(() => ({
          visible3: true
        }));
        break;
      default:
        break;
    }
  }
  handleOk(e) {
    let index = e.target.getAttribute("context");
    switch (index) {
      case "0":
        this.setState(() => ({
          visible: false
        }));
        break;
      case "1":
        this.setState(() => ({
          visible1: false
        }));
        break;
      case "2":
        this.setState(() => ({
          visible2: false
        }));
        break;
      case "3":
        this.setState(() => ({
          visible3: false
        }));
        break;
      default:
        break;
    }
  }
  handleCancel(e) {
    let index = e.target.getAttribute("context");
    switch (index) {
      case "0":
        this.setState(() => ({
          visible: false
        }));
        break;
      case "1":
        this.setState(() => ({
          visible1: false
        }));
        break;
      case "2":
        this.setState(() => ({
          visible2: false
        }));
        break;
      case "3":
        this.setState(() => ({
          visible3: false
        }));
        break;
      default:
        break;
    }
  }

  showConfirm() {
    Modal.confirm({
      title: '你想去杭州吗？',
      content: '那还用说吗!',
      onOk() {
        alert('加油');
      },
      onCancel() {
        alert('还没到时候');
      }
    });
  }

  info() {
    Modal.info({
      title: '一次锻炼自己的React实战项目',
      content: (
        <p style={{color: '#50eace'}}>React确实有些复杂</p>
      ),
      onOk() {}
    });
  }

  success() {
    Modal.success({
      title: 'OK! 牛逼！',
      content: '一切尽在掌握之中'
    });
  }

  error() {
    Modal.error({
      title: 'Bug!!!',
      content: '聂航，程序出Bug了！'
    });
  }

  warning() {
    Modal.warning({
      title: '规范',
      content: '为了代码的健壮性，你需要规范一下你的代码'
    });
  }
}
