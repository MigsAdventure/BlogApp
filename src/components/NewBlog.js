import React, {Component} from 'react';
import InputForm from './InputForm';



export default class NewBlog extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>Create A Blog</h1>
        <InputForm />
      </div>
    )
  }
}
