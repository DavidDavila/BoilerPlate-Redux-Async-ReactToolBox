import React, { Component } from 'react';
import styler from 'react-styling';
import { Button } from 'react-toolbox/lib/button';
import Input from 'react-toolbox/lib/input';
import { connect } from 'react-redux';
import * as registerBoxAction from './action/registerBox-action';
import Snackbar  from 'react-toolbox/lib/Snackbar';

const style = styler
`
  box
    max-width: 320px;
    width: 100%;
    margin: 0 auto;
    text-align: center;
`;

export class RegisterBox extends Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '', 'emailRepeat' : '', active : false };
    this.goToLink = this.goToLink.bind(this);
    this.validate = this.validate.bind(this);
  }
  handleChange(component, value) {
    this.state[component] = value;
    this.setState(this.state);
  }
  login() {

  }
  validate() {
    this.state.email == this.state.emailRepeat ? this.props.register(this.state) :this.incorrectEmails();
  }

  handleSnackbarTimeout() {
    this.setState({ active: false });
  }

  incorrectEmails() {
    this.setState({ active: true });
  }

  goToLink(rute) {
    this._reactInternalInstance._context.history.push('/' + rute);
  }
  render() {
    console.log(this.state);
    return (
      <div style={style.box}>
        <Input type='text' value={this.state.email} label='Email' name='email' onChange={this.handleChange.bind(this, 'email')} />
        <Input type='text' value={ this.state.emailRepeat } label='Repite tu mail' name='emailRepeat' onChange={this.handleChange.bind(this, 'emailRepeat')} />
        <Input type='password'value={this.state.password} label='Password' name='password' onChange={this.handleChange.bind(this, 'password')} />
        
        <Button 
          icon='person' 
          label='Login' 
          flat 
           onClick={ this.goToLink.bind(this, '') }
         
        />

        <Button 
          icon='fingerprint'
          label='Registrarse'
          flat
          primary
          onClick={this.validate} 
         />

        <Snackbar
          active={this.state.active}
          icon='code'
          label={'Los emails no coinciden'}
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
export default connect(mapStateToProps, registerBoxAction)(RegisterBox);
