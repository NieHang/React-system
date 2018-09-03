import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

class Header extends PureComponent {
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

const mapState = state => ({
  username: state.getIn(['header', 'username'])
});

const mapDispatch = dispatch => ({

});

export default connect(mapState, mapDispatch)(Header);