import API from '../API';

const BlogActions = {
  createBlog(blog) {
    API.createBlog(blog);
  },

  getBlogs() {
    API.getBlogs();
  },

  deleteBlog(id) {
    API.deleteBlog(id);
  },

  editBlog(blog) {
    API.editBlog(blog);
  },

};
export default BlogActions;
