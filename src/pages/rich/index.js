import React, { PureComponent } from "react";
import { Card, Button, Modal } from "antd";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { RichWrapper } from "./style";

export default class Rich extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      contentState: [],
      blocks: [],
      visible: false
    };

    this.onContentStateChange = this.onContentStateChange.bind(this);
    this.showModal = this.showModal.bind(this);
    this.onOk = this.onOk.bind(this);
  };

  showModal() {
    this.setState(() => ({
      visible: true
    }));
  };

  onOk() {
    this.setState(() => ({
      visible: false
    }));
  };

  onContentStateChange = contentState => {
    this.setState(() => ({
      contentState,
      blocks: contentState.blocks
    }));
  };

  render() {
    return (
      <RichWrapper>
        <Card>
          <Button type="primary" onClick={this.showModal}>获取HTML文本</Button>
          <Modal title="HTML文本" onOk={this.onOk} visible={this.state.visible}>
            {this.state.blocks.map(value => {
              return value.text;
            })}
          </Modal>
        </Card>
        <Card title="富文本编辑器">
          <Editor
            wrapperClassName="demo-wrapper"
            editorClassName="demo-editor"
            onContentStateChange={this.onContentStateChange}
          />
        </Card>
      </RichWrapper>
    );
  }
}
