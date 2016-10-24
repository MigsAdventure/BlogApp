import React, {Component} from 'react';
import { browserHistory } from 'react-router';

import BlogActions from '../actions/BlogActions'
import BlogStore from '../stores/BlogStore';

export default class MainPage extends Component {
  constructor() {
    super();

    this._onChange = this._onChange.bind(this);
    this.deleteBlog = this.deleteBlog.bind(this);
    this.editBlog = this.editBlog.bind(this);

    this.state = {
      results: BlogStore.getBlogs(),
      editName: '',
      editContent: '',
    };
  }

  componentWillMount() {
    BlogActions.getBlogs();
    BlogStore.startListening(this._onChange);
  }

  componentWillUnmount() {
    BlogStore.stopListening(this._onChange);
  }

  _onChange() {
    this.setState({
      results: BlogStore.getBlogs(),
    });
  }

  // openBlog(blog) {
  //   // BlogActions.openBlog(blog);
  //   // browserHistory.push(`/blogs/${blog.id}`);
  // }

  deleteBlog(id) {
    BlogActions.deleteBlog(id);
  }

  editBlog(blog) {
    const {nameEdit, contentEdit} = this.refs;
    let { results } = this.state;
    blog = results.filter((item) => {
      if(item._id === blog._id) {
        return blog;
      }

    });
    blog.name = nameEdit.value;
    blog.content = contentEdit.value;
    console.log('NEWBLOG: ', blog)
    BlogActions.editBlog(blog);
  }

  render() {
    const { results } = this.state;
    console.log('blogs COMP: ', results)

    return (
      <div>
        <h1>Blogs</h1>
        <div className='allBlogsContainer'>
          {
            // console.log('RESULTS:', results)
            results.map((blog, index) => (
              <div key={index} className='blogContainer' >
                <h2>{blog.name}</h2>
                <p>{blog.content}</p>'
                <button className='btn btn-primary'  data-toggle='modal' data-target={`.bs-example-modal-md${index}`}>Edit</button>
                <button className='btn btn-danger' onClick={this.deleteBlog.bind(null, blog._id)}>Delete</button>
                <div className={`modal fade bs-example-modal-md${index}`} tabIndex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
                  <div className="modal-dialog modal-md" role="document">
                    <div className="modal-content">
                      <input ref='nameEdit' type="text" defaultValue={blog.name}/>
                      <input ref='contentEdit' type="text" defaultValue={blog.content}/>
                      <button className='btn btn-success' onClick={this.editBlog.bind(null, blog)}>Save</button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    );
  }

}
