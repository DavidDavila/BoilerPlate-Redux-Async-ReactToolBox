import React, { Component } from 'react';
import RegisterBox from './../component/registerBox';
import { connect } from 'react-redux';
import styler from 'react-styling';
import * as RegisterBoxAction from './../component/registerBox/action/registerBox-action';
const style = styler
`
  container
    position:absolute;
    top:0;
    left:0;
    height:100vh;
`;
// NOTE: http://rackt.github.io/redux/docs/recipes/WritingTests.html
export class Register extends Component {
  render() {
    return (
      <section className="table" style={style.container}>
        <div className="table-cell">
          <div className="container">
            <RegisterBox />
          </div>
        </div>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return  state;
};
export default connect(mapStateToProps, RegisterBoxAction )(Register);
