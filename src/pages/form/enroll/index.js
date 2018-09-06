import React, { PureComponent } from "react";
import {
  Card,
  Form,
  Input,
  Icon,
  Button,
  message,
  Radio,
  InputNumber,
  Select,
  Switch,
  DatePicker,
  TimePicker,
  Upload,
  Checkbox
} from "antd";
import { EnrollWrapper } from "./style";
import moment from "moment";

class Enroll extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      male: "男",
      age: 18,
      currentState: "",
      hobby: [],
      isDog: false,
      address: "杭州",
      time: "",
      uploadLoading: false,
      imageUrl: "",
      isAgree: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeMale = this.changeMale.bind(this);
    this.changeAge = this.changeAge.bind(this);
    this.changeState = this.changeState.bind(this);
    this.changeHobby = this.changeHobby.bind(this);
    this.changeIsDog = this.changeIsDog.bind(this);
    this.changeDate = this.changeDate.bind(this);
    this.changeAvatar = this.changeAvatar.bind(this);
    this.changeAgree = this.changeAgree.bind(this);
  }

  handleSubmit = e => {
    e.preventDefault();
    const { male, age, currentState, hobby, isDog, date, address, time, imageUrl, isAgree } = this.state;
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        message.success(
          `欢迎${values.email}来到米奇妙妙屋，您的密码是:${values.password}
          性别: ${male}, 年龄: ${age}, 状态: ${currentState}, 爱好: ${hobby.map(value => {
            return value
          })}, 是否单身狗: ${isDog}, 生日: ${date} 地址: ${address}, 早起时间: ${time}, 图片连接: ${imageUrl}, 是否同意协议: ${isAgree}`
        );
      }
    });
  };

  changeMale = e => {
    const male = e.target.value;
    this.setState(() => ({
      male
    }));
  };

  changeAge = e => {
    this.setState(() => ({
      age: e
    }));
  };

  changeState = e => {
    this.setState(() => ({
      currentState: e
    }));
  };

  changeHobby = value => {
    this.setState(() => ({
      hobby: value
    }));
  };

  changeIsDog = value => {
    this.setState(() => ({
      isDog: value
    }));
  };

  changeDate = (value, date) => {
    this.setState(() => ({
      date
    }));
  };

  changeAddress = e => {
    this.setState(() => ({
      address: e.target.value
    }));
  };

  changeTime = (moment, time) => {
    this.setState(() => ({
      time
    }));
  };

  changeAvatar = info => {
    if (info.file.status === "uploading") {
      this.setState(() => ({
        uploadLoading: true
      }));
    }
    if (info.file.status === "done") {
      getBase64(info.file.originFileObj, imageUrl =>
        this.setState({
          imageUrl,
          loading: false
        })
      );
    }
  };

  changeAgree = e => {
    this.setState(() => ({
      isAgree: e.target.checked
    }));
  };

  render() {
    const FormItem = Form.Item;
    const { getFieldDecorator } = this.props.form;
    const RadioGroup = Radio.Group;
    const Option = Select.Option;
    const { TextArea } = Input;
    const uploadButton = (
      <div>
        <Icon type={this.state.uploadLoading ? "loading" : "plus"} />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    const { imageUrl } = this.state;
    return <EnrollWrapper>
        <Card title="注册表单">
          <Form onSubmit={this.handleSubmit}>
            <FormItem label="E-mail">
              {getFieldDecorator("email", {
                rules: [
                  {
                    type: "email",
                    message: "请填写正确的邮箱格式"
                  },
                  {
                    required: true,
                    message: "请填写邮箱地址"
                  }
                ]
              })(<Input />)}
            </FormItem>
            <FormItem label="Password">
              {getFieldDecorator("password", {
                rules: [
                  {
                    required: true,
                    message: "请输入密码"
                  },
                  {
                    pattern: /^[A-Za-z0-9_]{6,20}$/,
                    message: "请输入6-20位的密码"
                  }
                ]
              })(<Input type="password" />)}
            </FormItem>
            <FormItem label="Male">
              <RadioGroup onChange={this.changeMale} value={this.state.male}>
                <Radio value={"男"}>男</Radio>
                <Radio value={"女"}>女</Radio>
              </RadioGroup>
            </FormItem>
            <FormItem label="Age">
              <InputNumber defaultValue={18} onChange={this.changeAge} />
            </FormItem>
            <FormItem label="State">
              <Select defaultValue="当前状态" onChange={this.changeState}>
                <Option value="咸鱼一条">咸鱼一条</Option>
                <Option value="创业者">创业者</Option>
                <Option value="逃离者">逃离者</Option>
              </Select>
            </FormItem>
            <FormItem label="Hobby">
              <Select mode="multiple" placeholder="请选择爱好" style={{ width: 200 }} onChange={this.changeHobby}>
                <Option value="Code">Code</Option>
                <Option value="荒野大镖客：救赎2">荒野大镖客：救赎2</Option>
                <Option value="怪物猎人世界">怪物猎人世界</Option>
                <Option value="小姐姐">小姐姐</Option>
              </Select>
            </FormItem>
            <FormItem label="是否单身狗">
              <Switch checkedChildren={<Icon type="check" />} unCheckedChildren={<Icon type="close" />} onChange={this.changeIsDog} />
            </FormItem>
            <FormItem label="Birthday">
              <DatePicker onChange={this.changeDate} />
            </FormItem>
            <FormItem label="Address">
              <TextArea row={4} defaultValue={this.state.address} onPressEnter={this.changeAddress} />
            </FormItem>
            <FormItem label="早起时间">
              <TimePicker onChange={this.changeTime} defaultValue={moment("00:00:00", "HH:mm:ss")} />
            </FormItem>
            <FormItem label="头像">
              {getFieldDecorator("avatar", {
                rules: [
                  {
                    required: true,
                    message: "请上传头像"
                  }
                ]
              })(<Upload name="avatar" listType="picture-card" className="avatar-uploader" showUploadList={false} action="//jsonplaceholder.typicode.com/posts/" beforeUpload={beforeUpload} onChange={this.changeAvatar}>
                  {imageUrl ? <img src={imageUrl} alt="avatar" /> : uploadButton}
                </Upload>)}
            </FormItem>
            <FormItem>
              <Checkbox onChange={this.changeAgree}>
                我已阅读
                <a href="">此协议</a>
              </Checkbox>
            </FormItem>
            <FormItem>
              <Button type='primary' htmlType='submit'>注册</Button>
            </FormItem>
          </Form>
        </Card>
      </EnrollWrapper>;
  }
}

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
};

const beforeUpload = file => {
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("图片大小不能超过2M");
  }
  return isLt2M;
};

export default Form.create()(Enroll);