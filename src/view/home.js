import React, { Component } from 'react';
import Login from './../component/login';
import Logout from './../component/logout';
import styler from 'react-styling';
import * as loginAction from './../component/login/action/login-action';
import { connect } from 'react-redux';
const style = styler
`
  container
    position:absolute;
    top:0;
    left:0;
    height:100vh;
`;

export class Page extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section className="table" style={style.container}>
        <div className="table-cell">
          <div className="container">
            { !this.props.loginReducer ? <Login/> : <Logout/> }
          </div>
        </div>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return  state;
};
export default connect(mapStateToProps, loginAction )(Page);
