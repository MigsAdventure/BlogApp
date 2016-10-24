import axios from 'axios';
import ServerActions from './actions/ServerActions';

const API = {
  getBlogs() {
    axios.get('/api/blogs')
    .then((res) => {
      ServerActions.receiveBlogs(res.data);
    });
  },

  createBlog(blog) {
    axios.post('/api/blogs', blog)
    .then((res) => {
      console.log('create Blog API: ', (res));
      API.getBlogs();
    })
    .catch((err) => {
      console.log('err:', err);
    });
  },

  deleteBlog(id) {
    axios.delete(`/api/blogs/${id}`)
      .then((res) => {
        API.getBlogs();
      })
      .catch((err) => {
        console.log('err: ', err);
      });
  },

  editBlog(blog) {
    axios.put(`/api/blogs/${blog._id}`, blog)
      .then((res) => {
          API.getBlogs();
      })
      .catch((err) => {
        console.log('err: ', err);
      });
  },

};


export default API;
