import React, { Component } from 'react';
import { Button } from 'react-toolbox/lib/button';
import styler from 'react-styling';
import Input from 'react-toolbox/lib/input';

const style = styler
`
  container
    position:absolute;
    top:0;
    left:0;
    height:100vh;

  header
    text-align: center;
    font-weight:bold;

  marginBottom
    margin-bottom: 50px;

  image
    display: block;
    margin-left  : auto;
    margin-right : auto;


`;

export default class Page extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', phone: '', email: '', hint: '' };
  }
  handleChange(component, value) {
    console.log(value);
  }
  render() {
    return (
      <section className="table" style={style.container}>
        <div className="table-cell">
          <div className="container">
              <Input type='text' label='Name' name='name' onChange={this.handleChange.bind(this, 'name')} />
        
              <Button icon='bookmark' label='Bookmark' accent  mini />
              <Button icon='inbox' label='Inbox' flat />
              <h1 style={style.header}>
                BoilerPlate
              </h1>
              <h2 style={style.marginBottom}>
              Redux, React Universal, Webpack, Sass, Styles inline, Live Reload
            </h2>
            <img src="static/images/logo.png" style={style.image}/>
          </div>
        </div>
      </section>
    );
  }
}
