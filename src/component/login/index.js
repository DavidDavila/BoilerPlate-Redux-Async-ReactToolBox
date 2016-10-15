import React, { Component } from 'react';
import styler from 'react-styling';
import { Button } from 'react-toolbox/lib/button';
import Input from 'react-toolbox/lib/input';
import { connect } from 'react-redux';
import * as loginAction from './action/login-action';
const style = styler
`
  box
    max-width: 320px;
    width: 100%;
    margin: 0 auto;
    text-align: center;
`;

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '' };
  }
  handleChange(component, value) {
    this.state[component] = value;
    this.setState(this.state);
  }
  goToLink(rute) {
    this._reactInternalInstance._context.history.push('/' + rute);
  }
  render() {

    return (
      <div style={style.box}>
        <Input type='text' value={this.state.email} label='Email' name='email' onChange={this.handleChange.bind(this, 'email')} />
         <Input type='password'value={this.state.password} label='Password' name='password' onChange={this.handleChange.bind(this, 'password')} />
        
        <Button 
          icon='person' 
          label='Login' 
          flat 
          primary 
          onClick={ () => { 
            this.props.login(this.state);
          }} 
        />

        <Button 
          icon='fingerprint'
          label='Registrarse'
          flat
          onClick={ this.goToLink.bind(this, 'register') }
         />
      </div>
    );
  }
};
function mapStateToProps(state) {
  return  state;
};
export default connect(mapStateToProps, loginAction)(Login);
