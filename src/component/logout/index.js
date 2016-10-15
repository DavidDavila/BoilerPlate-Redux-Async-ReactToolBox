import React, { Component } from 'react';
import styler from 'react-styling';
import { connect } from 'react-redux';
import * as loginAction from './../login/action/login-action';
import { Card, CardTitle, CardActions } from 'react-toolbox/lib/card';
import Button from 'react-toolbox/lib/button';
import Snackbar  from 'react-toolbox/lib/Snackbar';

const style = styler
`
  box
    max-width: 520px;
    width: 100%;
    margin: 0 auto;
    text-align: center;
`;

export class Logout extends Component {

  constructor(props) {
    super(props);
    this.state = { active: false };
    this.showToken = this.showToken.bind(this);
    this.handleSnackbarTimeout = this.handleSnackbarTimeout.bind(this);
  }

  handleSnackbarTimeout() {
    this.setState({ active: false });
  };

  showToken() {
    this.setState({ active: true });
  };

  render() {
    console.log('logged');
    return (
      <div style={style.box}>
        <Card>
          <CardTitle 
            title={this.props.loginReducer.email} 
          />
          <CardActions>
            <Button label="Logout" onClick={ this.props.logout }/>
            <Button label="Show access token" onClick={ this.showToken }/>
          </CardActions>
        </Card>
         <Snackbar
          active={this.state.active}
          icon='code'
          label={this.props.loginReducer.token}
          timeout={2000}
          o
          onTimeout={this.handleSnackbarTimeout}
          type='cancel'
        />
      </div>
    );
  }
};
function mapStateToProps(state) {
  return  state;
};
export default connect(mapStateToProps, loginAction)(Logout);
