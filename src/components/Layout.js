import React, { Component } from 'react';
import {Link} from 'react-router';


export default class Layout extends Component {
  constructor() {
    super();
  }


  render() {
    return (
      <div className='container'>
        <ul className="nav nav-pills">
          <li className='links'><Link to='/'>Home</Link></li>
          <li className='links'><Link to='/newblog'>New Blog</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}
