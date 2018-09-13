import styled from "styled-components";

export const EnrollWrapper = styled.div`
  position: relative;
  margin: 5px 0px;
  padding: 24px;
  button {
    margin-left: 20px;
  }
  .ant-card {
    margin-bottom: 20px;
  }
  .ant-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    .ant-form-item {
      display: flex;
      flex-direction: row;
      width: 400px;
      .ant-form-item-label {
        width: 100px;
      }
      .ant-checkbox-wrapper,.ant-btn {
        margin-left: 100px;
      }
    }
    .ant-input-number-handler-up-inner:before {
      content: "";
    }
    .avatar-uploader > .ant-upload {
      width: 128px;
      height: 128px;
    }
  }
  .loading {
    display: block;
    margin: 0 auto;
  }
`;
