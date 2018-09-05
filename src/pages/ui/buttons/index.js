import React, { PureComponent } from 'react';
import { BtnWrapper } from './style';
import { withRouter } from 'react-router';

class Buttons extends PureComponent {
  render() {
    return (
      <BtnWrapper>
        btn
      </BtnWrapper>
    )
  }
  
}
export default withRouter(Buttons);