import React, { Component } from 'react';

let marked = require('marked');

import BlogActions from '../actions/BlogActions';

export default class InputForm extends Component {
  constructor() {
    super();

    this._submitForm = this._submitForm.bind(this);
  }

  _submitForm(e) {
    e.preventDefault();
    const { blogName, blogContent } = this.refs;
    const blogPackage = {
      name: blogName.value,
      content: blogContent.value,
    };
    blogName.value = '';
    blogContent.value = '';
    BlogActions.createBlog(blogPackage);
    alert('Congrats! Blog was created! Check the Home Page!');
  }

  render() {
    return (
      <div>
        <form onSubmit={this._submitForm} className='form-inline'>
          <div>
            <input ref='blogName' type="text" placeholder="Blog Title"/>
            <textarea ref='blogContent' type="text"  className='blogContent' placeholder="Blog Content"/>
          </div>
          <button type='submit' className='btn btn-primary'>Create Blog</button>
        </form>
      </div>
    );
  }
}
