import AppDispatcher from '../AppDispatcher';

const ServerActions = {
  receiveBlogs(blogs) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_BLOGS',
      payload: blogs,
    });
  },
};
export default ServerActions;
